str1, str2 = input().split()

if len(str1) >= 1 and len(str1) <= 10 and len(str2) >= 1 and len(str2) <= 10:
  print("{}{}".format(str1, str2))
else:
  print("다시 입력해주세요.")
