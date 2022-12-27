import Images from './Images';

const List = () =>{
    return(
        <ol>
            
            <Images linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" lebar="500" />
            <li>Gado-Gado</li>

            <Images linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" lebar="500" />
            <li>Nasi Padang</li>

            <Images linkgambar=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" lebar="500" />
            <li>Sate</li>
          
        </ol>
    );
}

export default List;