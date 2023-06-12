import gzip
import os
import time
import matplotlib.pylab as plt

start = time.time()
name = input("Enter your Minecraft username: ")
words, characters, word_dict, line_dict = 0, 0, {'lol': 0}, {'lol': 0}


def template_to_username(kef_strings):
    name_strings = []
    for phrase in kef_strings:
        if "USERNAME" in phrase:
            name_strings.append(phrase.replace("USERNAME", "{}").format(name))
        else:
            name_strings.append(phrase)
    return name_strings


template_options = ["USERNAME§f: ", "USERNAME: ", "<USERNAME> ", "USERNAME §6[P]§f: "]
name_options = template_to_username(template_options)
template_not_message = ["Teleported", "logged in with entity", "item.item", "Successfully cloned", "Set",
                        "USERNAME.aternos.me", "randomTickSpeed", "Applied Enchantment", "Gave 64",
                        "Gamerule maxEntityCramming", "255 to USERNAME for",
                        "Applied enchantment",
                        "Given [", "Set the weather", " entities ", "Summoned new", "Disconnected",
                        "Enchanting succeeded]", "Killed USERNAME", "Killed",
                        "/give USERNAME", "Game rule", "Kicked by",
                        " to USERNAME for ", " blocks filled", "/summon", "EntityArmorStand", "Armour Stand",
                        "Successfully", "Changing to ", "Applied effect", "Stopped all '", "Stopped sound '",
                        "Changing to"]
name_not_message = template_to_username(template_not_message)
directory_file = input(
    r"Find your logs file and copy it here (like C:\Users\username\AppData\Roaming\.minecraft\logs): ")
directory_in_str = directory_file

min_len = 25
filter_len = 40
total_files = 0
no_name_files = 0


def parse_text(file, encode=False):
    global characters, words, words_per_file, word_dict, line_dict
    strings = [name, ":", "[CHAT]"]
    if encode:
        strings = [x.encode() for x in strings]
    for line in file:
        if strings[0] not in line or strings[2] not in line:
            continue
        skip = False
        for msg in name_not_message:
            if encode:
                msg = msg.encode()
            if line.find(msg) != -1:
                skip = True
                # print("FAKE:", line)
        if skip:
            continue
        # print("REAL:", line)
        name_line = ""
        for option in name_options:
            if encode:
                option = option.encode()
            if option in line.strip():
                name_line = line.strip().split(option)[1]
        if len(name_line) == 0:
            if line.strip().find(strings[0]) < line.strip().rfind(strings[1]):
                name_line = line.strip().split(strings[1])[-1]
        if len(name_line) > 0:
            if encode:
                name_line = str(name_line).strip('b').strip('"\'')
            if name_line in line_dict and len(name_line) > filter_len:
                continue
            if name_line in line_dict:
                line_dict[name_line] += 1
            else:
                line_dict[name_line] = 1
            characters += len(name_line)
            name_words = name_line.split(" ")
            words += len(name_words)
            words_per_file += len(name_words)
            for w in name_words:
                if w in word_dict:
                    word_dict[w] += 1
                else:
                    word_dict[w] = 1
        # if len(name_line) > min_len:
        #     print(name_line)


for entry in os.scandir(directory_in_str):
    path = entry.path
    filename = path.split("\\")[-1]
    if filename.endswith(".log.gz") or filename.endswith(".log"):
        words_per_file = 0
        if filename.endswith(".log.gz"):
            gz_file = gzip.open(path, "r")
            parse_text(gz_file, encode=True)
        elif filename.endswith(".log"):
            with open(path) as f:
                parse_text(f)
        if words_per_file == 0:
            no_name_files += 1

        total_files += 1
min_line_repetition = 40
min_word_repetition = 150
if max(line_dict.values()) < min_line_repetition:
    min_line_repetition = 2
if max(word_dict.values()) < min_word_repetition:
    min_word_repetition = 10
for key in list(line_dict.keys()):
    if line_dict[key] < min_line_repetition:
        del line_dict[key]
for key in list(word_dict.keys()):
    if word_dict[key] < min_word_repetition:
        del word_dict[key]
line_dict = {k: v for k, v in sorted(line_dict.items(), key=lambda item: item[1], reverse=True)}
word_dict = {k: v for k, v in sorted(word_dict.items(), key=lambda item: item[1], reverse=True)}
print("RESULTS BELOW:")
print("words typed:", word_dict)
print("lines typed:", line_dict)
print("total words:", words)
print("total characters (with spaces) typed:", characters)
print("DEBUGGING INFO:")
print("percent of log files without any messages:", no_name_files / total_files, no_name_files, "/", total_files)
# for key in word_dict.keys():
#     word_dict[key] = math.log(word_dict[key], 10)
word_list = sorted(word_dict.items(), key=lambda kv: kv[1], reverse=True)
word, freq = zip(*word_list)
plt.plot(word, freq)
plt.tick_params(
    axis='x',  # changes apply to the x-axis
    which='both',  # both major and minor ticks are affected
    bottom=False,  # ticks along the bottom edge are off
    top=False,  # ticks along the top edge are off
    labelbottom=False)  # labels along the bottom edge are off
exp_index = 1
word_freq_list = list(zip(word, freq))
for index in range(len(word_freq_list)):
    if index == exp_index:
        word = word_freq_list[index][0]
        freq = word_freq_list[index][1]
        plt.annotate(word + ", " + str(freq),  # this is the text
                     (word, freq),  # these are the coordinates to position the label
                     textcoords="offset points",  # how to position the text
                     xytext=(0, 10),  # distance from text to points (x,y)
                     fontsize=10,
                     ha='center')  # horizontal alignment can be left, right or center
        exp_index *= 3
plt.title("Word Frequency vs Word (in Minecraft)")
plt.xlabel("Word")
plt.ylabel("Word Frequency")
end = time.time()
print(end - start, "seconds to load")
plt.show()
finish = input("Press enter to exit program (it will close the program):")
