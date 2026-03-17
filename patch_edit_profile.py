import re

filepath = "src/app/(route)/mypage/edit-profile/page.tsx"

with open(filepath, "r") as f:
    content = f.read()

# Add imports
import_str = 'import MobileBackButtonWrapper from "../_components/MobileBackButton";\nimport { MYPAGE_DATA_MOCK, USER_INFO_MOCK } from "@mock/mypageMock";\n'
content = content.replace('import MobileBackButtonWrapper from "../_components/MobileBackButton";\n', import_str)

# Modify the component logic
component_start = 'const EditProfile = () => {\n  const queryClient = useQueryClient();\n  const { error, success } = useToast();\n'

new_component_start = '''const EditProfile = () => {
  const queryClient = useQueryClient();
  const { error, success } = useToast();
  const useMock = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

  const { data: apiUserInfo, isLoading: userInfoIsLoading } = useUserInfo();
  const { data: apiMypageData, isLoading } = useGetMyPageData();

  const userInfo = useMock ? USER_INFO_MOCK : apiUserInfo;
  const mypageData = useMock ? MYPAGE_DATA_MOCK : apiMypageData;

'''

content = content.replace(
    'const EditProfile = () => {\n  const queryClient = useQueryClient();\n  const { error, success } = useToast();\n  const { data: userInfo, isLoading: userInfoIsLoading } = useUserInfo();\n  const { data: mypageData, isLoading } = useGetMyPageData();\n',
    new_component_start
)

with open(filepath, "w") as f:
    f.write(content)
