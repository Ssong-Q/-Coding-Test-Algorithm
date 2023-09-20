word = input().strip()
i = 0
changed_word_array = []

if len(word) >= 1 and len(word) <= 20:
    while i < len(word):
        if word[i].isupper() == True:
            changed_word_array.append(word[i].lower())
        else:
            changed_word_array.append(word[i].upper())
        i += 1
    changed_word = ''.join(changed_word_array)
    print(changed_word)
else:
    print('다시 입력해주세요')