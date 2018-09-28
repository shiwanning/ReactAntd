import React from 'react';
import { Col,Row,Card,Modal} from 'antd';

export default class Gallery extends React.Component{

    state = {
        visiable: false
    }


    handleImgOnClick = (item) => {
        console.log(item);
        this.setState({
            visiable: true,
            currentImg: `/gallery/${item}`,
        })
    }

    render() {
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png']
        ];

        const imgList = imgs.map((list) => list.map((item) => 
            <Card key={item}
                style={{ marginBottom: 10 }}
                cover={<img src={`/gallery/${item}`} alt="" onClick={()=>this.handleImgOnClick(item)}/>}
            >
                <Card.Meta
                    title="React Admin"
                    description={item}
                />
           </Card> 
        ));
        return (
            <div className = "card-wrap">
                <Row gutter={16}>
                    {imgList.map((list, item) => {
                        let span = 5;
                        item === list.length - 1 ? span = 4 : span =5;
                        return (<Col key={item} span={span}>
                            {list}
                        </Col>)
                    })}
                </Row>
                <Modal
                    width={400}
                    height={200}
                    visible={this.state.visiable}
                    title="图片画廊"
                    onCancel={() => {
                        this.setState({
                            visiable: false,
                        })
                    }}
                    footer={null}
                >
                    {<img src={this.state.currentImg} alt="" style={{ width: '100%' }} />}
                </Modal>
            </div>
        )
    }
}