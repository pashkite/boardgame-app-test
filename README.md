# 🎲 보드게임 앱 테스트 프로젝트

## 소개
React Native로 제작된 보드게임 컬렉션 앱입니다. 다양한 보드게임 정보를 확인하고 게임을 시작할 수 있습니다.

## 기술 스택
- **React Native**: 크로스 플랫폼 모바일 앱 개발
- **React Native Paper**: Material Design 컴포넌트
- **Styled-Components**: CSS-in-JS 스타일링
- **NativeWind**: Tailwind CSS for React Native
- **Dripsy**: Responsive Design System
- **Expo Three**: 3D 그래픽스 지원

## 주요 기능
✅ 보드게임 목록 보기
✅ 게임 상세 정보 확인
✅ 플레이어 수 및 게임 시간 표시
✅ 반응형 디자인
✅ 다크 테마 UI

## 설치 방법
```bash
# 의존성 설치
npm install

# 앱 실행
npm start

# Android에서 실행
npm run android

# iOS에서 실행
npm run ios
```

## 📱 APK 빌드 및 테스트

### 🚀 방법 1: Expo Go로 즉시 테스트 (추천!)

가장 빠르고 쉬운 방법입니다!

1. **테스터가 Expo Go 앱 설치**
   - Android: [Play Store에서 Expo Go 다운로드](https://play.google.com/store/apps/details?id=host.exp.exponent)
   
2. **개발자가 앱 실행**
   ```bash
   npm start
   ```

3. **테스터가 QR 코드 스캔**
   - Expo Go 앱으로 터미널의 QR 코드를 스캔하면 즉시 앱 실행!
   - 코드 수정 시 실시간으로 반영됨 (Hot Reload)

### 🎯 방법 2: APK 파일 빌드 (정식 테스트)

실제 기기에서 독립 실행 가능한 APK를 만듭니다.

```bash
# 1. EAS CLI 설치
npm install -g eas-cli

# 2. Expo 로그인
eas login

# 3. 프로젝트 구성
eas build:configure

# 4. Android APK 빌드 (테스트용)
eas build --platform android --profile preview

# 5. 빌드 완료 후 다운로드 링크를 공유
```

빌드가 완료되면 Expo 대시보드에서 APK를 다운로드하고 링크를 공유하세요!

### ⚙️ 방법 3: GitHub Actions 자동 빌드

코드를 푸시하면 자동으로 APK가 빌드됩니다!

1. **Expo Token 설정**
   ```bash
   eas login
   # expo.dev에서 액세스 토큰 생성
   ```

2. **GitHub Secrets 추가**
   - Repository Settings → Secrets and variables → Actions
   - `EXPO_TOKEN` 추가

3. **워크플로우 실행**
   - Actions 탭 → "EAS Build" → "Run workflow"
   - Platform: android 선택
   - Profile: preview 선택

### 📄 상세 빌드 가이드

더 자세한 내용은 [BUILD_GUIDE.md](BUILD_GUIDE.md)를 참고하세요!
- 5가지 빌드 방법 비교
- 트러블슈팅
- APK 배포 방법
- 보안 설정

## 포함된 보드게임
1. **체스 (Chess)** - 2명, 30-60분
2. **카탄 (Catan)** - 3-4명, 60-120분
3. **스플렌더 (Splendor)** - 2-4명, 30분
4. **코드네임 (Codenames)** - 4-8명, 15-30분
5. **아컴호러 (Arkham Horror)** - 1-8명, 120-180분

## 테스트
```bash
npm test
```

## 🚀 다음 단계
- [ ] 실시간 멀티플레이어 기능 추가
- [ ] 3D 게임 보드 렌더링 (react-native-threejs)
- [ ] Docker 컨테이너 배포 설정
- [ ] 테이블탑 시뮬레이터 모드 구현
- [ ] 온라인 매치메이킹 시스템
- [ ] 게임 통계 및 순위 시스템

## 개발자
시니어 React Native 개발자 (10년 경력)
- React Native Paper, Dripsy, NativeWind 전문
- 실시간 통신 및 배포 경험 다수
- 테이블탑 시뮬레이터 제작 경험

## 링크
- 📦 [저장소](https://github.com/pashkite/boardgame-app-test)
- 🐛 [이슈](https://github.com/pashkite/boardgame-app-test/issues)
- 📖 [빌드 가이드](BUILD_GUIDE.md)

## 라이선스
MIT
