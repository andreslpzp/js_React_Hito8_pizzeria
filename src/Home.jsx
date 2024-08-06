import React from 'react';
import Header from './header';
import CardPizza from './CardPizza';

function Home() {
    return (
      <div>
        <Header />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <CardPizza
            name="Hortelano al armagnac"
            price={159000}
            ingredients={["Hortelano", "Reducción de Armagnac", "Hongos silvestres", "Frutos secos"]}
            img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwaWzkWW2lAcGYvVwDo81h8K39P_WFbmmZNGPQWZwZr6MlXwP8XDJbWRH5izPdl96TImoozhaxJYtC5upobbbYRplFd-AnJNlqpjLqhEPu0gxCymDuvVn6nj5-OBGx_Q6Xoq1Mr8KP5bg/s1600/2018-05-05_113949.jpg"
          />
          <CardPizza
            name="Unadon"
            price={69000}
            ingredients={["Anguila Japonesa", "Salsa Unagui", "Salsa tare", "Arroz blanco"]}
            img="https://imag.bonviveur.com/unadon-anguila-a-la-parrilla-con-arroz-servida-en-un-bol.webp"
          />
          <CardPizza
            name="Balut"
            price={54000}
            ingredients={["Pimienta", "Vinagre", "Ají"]}
            img="https://www.tastewinchesterhistory.com/wp/wp-content/uploads/2019/02/balut.jpg"
          />
        </div>
      </div>
    );
  }

export default Home;