import { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

var axios = require('axios');

const Nfts = () => {
    const [nfts, setNfts] = useState([]);

    async function loadNfts(){
        let response = await axios.get(`/api/search?address=${localStorage.getItem("address")}`);
        setNfts(response.data)
    }

    useEffect(()=>{
        loadNfts();
    }, [])

    return (
        <Row>
            {
                nfts.map(nft =>(
                    <Col sm={4} key={nft.token_id.toString()}>
                        <Card >
                            <Card.Text>
                                <b>{nft.token_id}</b>
                            </Card.Text>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}
export default Nfts;