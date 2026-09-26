# sampleapl-demo
## Podman
### Build
#### podman build -t <<image_name>> .
### Run
#### podman run -d --name <<container_name>> -p 8088:8088 <<image_name>>
## E2E テスト (Playwright)
### ローカル実行
#### cd e2e && npm install && npx playwright install chromium
#### BASE_URL=http://localhost:8088 npx playwright test
