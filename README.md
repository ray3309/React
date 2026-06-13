# React

[프로젝트 생성]

1. yarn create react-app <생성할 프로젝트명> --template typescript

2. HOST=192.168.0.3
   PORT=8081

3. yarn install
   yarn add -W react-slick
   yarn add -W slick-carousel
   yarn add -W --dev @types/react-slick   

4. yarn add -D -W env-cmd

5. 실행을 원하는 하위프로젝트(react06xx)의 package.json파일을 열고 script 내부의 
   start 명령어를 아래처럼 변경
   "start": "env-cmd -f ../.env react-scripts start"

