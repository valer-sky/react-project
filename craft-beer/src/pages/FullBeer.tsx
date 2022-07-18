import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullBeer: React.FC = () => {
    const [beer, setBeer] = React.useState<{
        title: string;
        subtitle: string;
        price: number;
        imageUrl: string;
    }>();
    const { id } = useParams();
    const navigate = useNavigate();

    async function fetchBeer() {
        try {
            const {data} = await axios.get('https://62becc69be8ba3a10d5be2ad.mockapi.io/items/' + id);
            setBeer(data);
        } catch (error) {
            alert("Ошибка при получении пива!!!");
            navigate('/');
        }
    }

    React.useEffect(() => {
        fetchBeer();
    }, []);//eslint-disable-line

        if(!beer) {
            return <>Загрузка...</>
        }
    return(
        <div className="container">
            <div className="container beer--info">
                <div className="image__block">
                <img src={beer.imageUrl} />
                </div>
                <div className="beer__info--block">
                <h2>{beer.title}</h2>
                <h3>{beer.subtitle}</h3>
                <h4>{beer.price} Br.</h4>
                </div>
               
                </div>
            
        </div>
    );
};

export default FullBeer;