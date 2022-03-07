# Getting Started with Fastify-CLI [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)
## 이프로젝트는  Fastify-CLI를 기반으로 작성되었습니다.

이프로젝트의 디렉토리는 기능별 4개의 디렉토리로 구성되어있습니다.

서버 운영에 관한 메인 파일은 app.js에 작성이 되어있습니다
*디렉토리별 설명
1. plugin - 애플리케이션의 모든 경로에 공통적인 동작을 정의하고 있습니다.
2. route - 애플리케이션의 엔드포인트를 정의하고 있으며 구체적인 API 가 구성되어있습니다
3. model - 엔드포인트당 데이터 연결이 설정되어 있습니다.
4. test - 본프로그램에서 디버깅 과정은 생략되었습니다.



## Fastify CLI  작업 순서
- npm install
- npm i fastify —save
- npm i fastify mongodb
- npm install --save fastify-env   (env 환경변수 설정)

## 실행순서

프로젝트 디렉토리에서 서버 실행하기:
### `npm run dev`

dev모드에서 실행을 하고 브라우저를 열어 확인합니다.
Open [http://localhost:3000](http://localhost:3000) 

### `npm start`

For production mode

