# 📦 안드로이드 APK 빌드 가이드

## 방법 1: Expo EAS Build (추천)

### 사전 준비
1. Expo 계정 생성: https://expo.dev/signup
2. EAS CLI 설치:
```bash
npm install -g eas-cli
```

### 빌드 단계

#### 1. EAS 로그인
```bash
eas login
```

#### 2. 프로젝트 설정
```bash
eas build:configure
```

#### 3. 안드로이드 APK 빌드 (테스트용)
```bash
# Preview 빌드 (내부 테스트용)
eas build --platform android --profile preview

# Development 빌드 (개발용)
eas build --platform android --profile development

# Production 빌드 (배포용)
eas build --platform android --profile production
```

#### 4. 빌드 완료 후
- Expo 대시보드에서 APK 다운로드: https://expo.dev/accounts/[your-username]/projects/boardgame-app/builds
- 다운로드 링크를 팀원들과 공유
- QR 코드로 직접 다운로드 가능

---

## 방법 2: GitHub Actions 자동 빌드

### 설정 방법

1. GitHub Secrets 추가 (Repository Settings → Secrets and variables → Actions):
   - `EXPO_TOKEN`: Expo 액세스 토큰
   
2. Expo 토큰 생성:
```bash
eas login
eas build:configure
# expo.dev에서 액세스 토큰 생성
```

3. GitHub Actions 워크플로우 실행:
   - Actions 탭 → "EAS Build" → "Run workflow"
   - Platform 선택: android
   - Profile 선택: preview

---

## 방법 3: 로컬 빌드 (Android Studio 필요)

### 사전 준비
- Android Studio 설치
- JDK 11 이상 설치
- Android SDK 설치

### 빌드 단계

```bash
# 1. Android 프로젝트 생성
npx expo prebuild --platform android

# 2. Android 폴더로 이동
cd android

# 3. APK 빌드
./gradlew assembleRelease

# APK 위치: android/app/build/outputs/apk/release/app-release.apk
```

---

## 방법 4: Expo Go 앱으로 테스트 (가장 빠름!)

### 테스터용 가이드

1. **Expo Go 앱 설치**
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent
   - iOS: https://apps.apple.com/app/expo-go/id982107779

2. **개발자가 앱 실행**
```bash
npm start
# 또는
npx expo start
```

3. **테스터가 QR 코드 스캔**
   - 터미널에 표시된 QR 코드를 Expo Go 앱으로 스캔
   - 즉시 앱 실행 및 테스트 가능

4. **장점**
   - APK 빌드 불필요
   - 실시간 업데이트 가능
   - 코드 수정하면 즉시 반영

---

## 방법 5: Over-The-Air (OTA) 업데이트

```bash
# 앱 배포 후 코드만 업데이트
eas update --branch preview --message "새로운 보드게임 추가"
```

사용자는 APK 재설치 없이 자동으로 업데이트 받음!

---

## 🎯 추천 워크플로우

### 개발 단계
1. **로컬 테스트**: `npm start` → Expo Go로 테스트
2. **팀 공유**: GitHub에 푸시 → GitHub Actions로 자동 빌드
3. **내부 테스트**: EAS Preview 빌드 → APK 다운로드 링크 공유
4. **배포**: EAS Production 빌드 → Google Play Store 제출

---

## 📱 APK 배포 방법

### 1. 직접 공유
- 빌드된 APK 파일을 Google Drive, Dropbox 등에 업로드
- 다운로드 링크 공유
- 테스터가 "알 수 없는 출처" 허용 후 설치

### 2. Firebase App Distribution
```bash
npm install -g firebase-tools
firebase login
firebase appdistribution:distribute app-release.apk \
  --app [your-app-id] \
  --groups "testers"
```

### 3. Google Play Internal Testing
- Google Play Console에서 내부 테스트 트랙 생성
- APK 업로드
- 테스터 이메일 추가
- 테스터가 Google Play에서 설치

---

## 🔒 보안 참고사항

### 키스토어 관리
EAS Build는 자동으로 키스토어를 관리하지만, 로컬 빌드 시:

```bash
# 키스토어 생성
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore \
  -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

⚠️ 키스토어 파일은 절대 Git에 커밋하지 마세요!

---

## 🐛 트러블슈팅

### "Unable to locate adb" 에러
```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### 빌드가 너무 느림
```bash
# Gradle 데몬 사용
cd android
./gradlew --daemon assembleRelease
```

### APK 크기 최적화
```json
// app.json에 추가
"android": {
  "enableProguardInReleaseBuilds": true,
  "enableShrinkResourcesInReleaseBuilds": true
}
```

---

## 📊 빌드 비교

| 방법 | 시간 | 난이도 | 자동화 | 추천도 |
|------|------|--------|--------|--------|
| Expo Go | 1분 | ⭐ | ❌ | ⭐⭐⭐⭐⭐ (개발) |
| EAS Build | 10-15분 | ⭐⭐ | ✅ | ⭐⭐⭐⭐⭐ (배포) |
| 로컬 빌드 | 5-10분 | ⭐⭐⭐⭐ | ❌ | ⭐⭐⭐ |
| GitHub Actions | 15-20분 | ⭐⭐⭐ | ✅ | ⭐⭐⭐⭐ |

---

## 💡 팁

1. **빠른 테스트**: Expo Go 사용
2. **정식 테스트**: EAS Preview 빌드
3. **자동화**: GitHub Actions 설정
4. **배포**: EAS Production 빌드

질문이 있으면 이슈를 생성하세요! 🚀
