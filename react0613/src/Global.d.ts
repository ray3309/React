//src/golbal.d.ts
//typescript에서 필요한 모듈을 선언

declare module '*.module.css' {
    const classes: { [key:string] : string }
    export default classes;
}

//singup.module.css 타입으로 모듈이 인식 되도록 선언
//declare module 'singup.'

declare module 'slick-carousel/slick/*.css'