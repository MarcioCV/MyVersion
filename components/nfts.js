import { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Image from 'next/image'

const Nfts = () => {
    const [nfts, setNfts] = useState([]);



    async function loadNfts() {
        let response = await axios.get(`/api/search?address=${localStorage.getItem("address")}`)
        let nftData = []
        let amount = 0, block_number = 0, contract_type = "", createdAt = "", name = "", objectId = "",
            owner_of = "", symbol = "", token_address = "", token_id = 0, token_uri = "",image="",description="",external_url="",attributes=[]

        for (let i = 0; i < response.data.length; i++) {
            let nftJson = await axios.get(response.data[i].token_uri)
            description = nftJson.data.description;
            external_url = nftJson.data.external_url;
            image = nftJson.data.image;
            name = nftJson.data.name;
            attributes = nftJson.data.attributes;
            image = nftJson.data.image;
            token_id = response.data[i].token_id;
            amount = response.data[i].amount;
            block_number = response.data[i].block_number;
            contract_type = response.data[i].contract_type;
            createdAt = response.data[i].createdAt;
            name = response.data[i].name;
            objectId = response.data[i].objectId;
            owner_of = response.data[i].owner_of;
            symbol = response.data[i].symbol;
            token_address = response.data[i].token_address;
            nftData.push({ token_id, image,description,external_url,name,image,attributes,token_id,amount,block_number,contract_type,createdAt,name,objectId,owner_of,symbol,token_address })
        }
        console.log(nftData)
        setNfts(nftData);
    }

    useEffect(() => {
        loadNfts();
    }, [])

    return (
        <Row>
                {nfts.map(nft => (
                    <Col sm={4} key={nft.token_id.toString()}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{ width: '18rem' }} variant="top" src={nft.image} />
                            <Card.Text>
                                <b>Token id: </b>{nft.token_id}<br />
                                <b>Name: </b>{nft.name}<br />
                                <b>Description:</b>{nft.description}<br />
                                <b>Owner of: </b>{nft.owner_of}
                            </Card.Text>
                        </Card>
                    </Col>
                ))}

        </Row>
    )
}
export default Nfts;