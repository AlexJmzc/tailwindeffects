import { Card } from '../card/card';

import Yuji from '../../assets/img/Yuji.jpg';
import Maki from '../../assets/img/Maki.jpg';
import Toji from '../../assets/img/Toji.jpg';


export const Main = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-red-900 via-red-600 to-gray-900 font-sans">
      <div className="main grid grid-cols-3 gap-6 p-10">
         <Card imageURL={Yuji} name='Yuji Itadori'/>
         <Card imageURL={Maki} name='Maki Zenin'/>
         <Card imageURL={Toji} name='Toji Zenin'/>
      </div>
    </div>
  )
}