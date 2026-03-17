import re

filepath = "src/app/(route)/mypage/edit-profile/page.tsx"

with open(filepath, "r") as f:
    content = f.read()

content = content.replace(
    '  const userInfo = useMock ? USER_INFO_MOCK : apiUserInfo;\n  const mypageData = useMock ? MYPAGE_DATA_MOCK : apiMypageData;',
    '  const userInfo = useMock ? USER_INFO_MOCK : apiUserInfo;\n  const mypageData = useMock ? MYPAGE_DATA_MOCK : apiMypageData;\n\n  const isUserInfoLoading = useMock ? false : userInfoIsLoading;'
)

content = content.replace(
    '{!userInfoIsLoading && (',
    '{!isUserInfoLoading && ('
)

with open(filepath, "w") as f:
    f.write(content)
