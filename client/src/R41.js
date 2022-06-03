import React, { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";


const items = [
    {
        src:'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fw.namu.la%2Fs%2F68ceecda255f94d46392c8ade5aea7c01713d134ec030bb7d29117c66c8cbdc11c5c53e7d213ea4561807aa6c7726a31efed9cd33a17e582b1d69a523bca3b7b81eec339e96469cab1b52dff91775aa37394330956ad0c73d9b59d72b5c582a7&type=ff264_180',
        altText : '슬라이드1 이미지 대체 문구',
        caption : '슬라이드1 설명',
        header : '슬라이드1 제목'
    },
    {   
        src : 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fww.namu.la%2Fs%2Fe130b9b1ad84d32d9098c768270bcf234ed2b9eeac93680b74b5acb6b1f1ab4279e17e95ecfd4715fee7827d2e870c066149c45b48e6d6911eaea2a0fe3d922648429b949b1b4a60cb63d61af32ea780e1a73280037a5f33072426b38e79a89c&type=ff264_180',
        
        altText : '슬라이드2 이미지 대체 문구',
        caption : '슬라이드2 설명',
        header : '슬라이드2 제목'
    },
    {
        src:'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fw.namu.la%2Fs%2F50d416ea0c1d9ee10d591f7ef2e5d5bb2818bb73ca33307f4e47577270b3d5ceccf36d9081d348db44a69d51f5dfefa18838f50a914a9bb0cd010cd79efa383ef95620d811211a5db0202c4182aca710f41ff810cd0257dd5de5e562dac142d7&type=ff264_180',
        altText : '슬라이드3 이미지 대체 문구',
        caption : '슬라이드3 설명',
        header : '슬라이드3 제목'
    }
    
]



class R41 extends Component{
    render(){
        return (
            <div>
                <UncontrolledCarousel items={items} />
            </div>
        )
    }
}

export default R41