import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { FormGroup, Input, Label, Button } from "reactstrap";
import "./OrderPizza.css";

const OrderPizza = () => {
  let aclass = (isActive) => (isActive ? "active" : "");

  const [form, setForm] = useState({
    boyut: "",
    kalınlık: "",
    malzeme: "",
    not: "",
    adet: "",
  });

  const changeHandler = (event) => {};

  return (
    <>
      <div className="main-cont">
        <div className="t-links">
          <NavLink to="/" className={aclass} exact>
            Anasayfa
          </NavLink>
          <p>-</p>
          <NavLink to="#" className={aclass} exact>
            Seçenekler
          </NavLink>
          <p>-</p>
          <NavLink to="/order" className={aclass} exact>
            Sipariş Oluştur
          </NavLink>
        </div>
      </div>
      <form>
        <div className="underheader">
          <h4>Position Absolute Acı Pizza</h4>
          <div className="fiyatkismi">
            <div className="fiyatdiv">
              <h2>85.60</h2>
            </div>
            <div className="puan">
              <h4>4.9</h4>
              <h4>(200)</h4>
            </div>
          </div>
          <div className="aciklama">
            <p>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre.Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>

          <div className="boyham">
            <div className="pizzaboyut">
              <div className="boyutsec">
                <h4>Boyut Seç</h4>
                <h2>*</h2>
              </div>
              <Input name="radio1" type="radio" /> <Label check>Küçük</Label>
              <Input name="radio1" type="radio" /> <Label check>Orta</Label>
              <Input name="radio1" type="radio" /> <Label check>Büyük</Label>
            </div>
            <div className="hamurboyut">
              <div className="hamurboyut2">
                <h4>Hamur Seç</h4>
                <h2>*</h2>
              </div>
              <Input className="mb-3" type="select" name="kalınlık">
                <option>Hamur Kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="orta">Orta</option>
                <option value="kalın">Kalın</option>
              </Input>
            </div>
          </div>
          <div className="malzemeler">
            <h4>Ek Malzemeler</h4>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5</p>
            <div className="malzemei">
              <Input type="checkbox" /> <Label check>Pepperoni</Label>
              <Input type="checkbox" /> <Label check>Domates</Label>
              <Input type="checkbox" /> <Label check>Biber</Label>
              <Input type="checkbox" /> <Label check>Sosis</Label>
              <Input type="checkbox" /> <Label check>Mısır</Label>
              <Input type="checkbox" /> <Label check>Sucuk</Label>
              <Input type="checkbox" /> <Label check>Kanada Jambonu</Label>
              <Input type="checkbox" /> <Label check>Sucuk</Label>
              <Input type="checkbox" /> <Label check>Ananas</Label>
              <Input type="checkbox" /> <Label check>Tavuk Izgara</Label>
              <Input type="checkbox" /> <Label check>Jalepeno</Label>
              <Input type="checkbox" /> <Label check>Kabak</Label>
              <Input type="checkbox" /> <Label check>Soğan</Label>
              <Input type="checkbox" /> <Label check>Sarımsak</Label>
            </div>
            <div className="not">
              <h4>Sipariş Notu</h4>

              <Input
                id="not"
                name="not"
                placeholder="Siparişinize eklemek istediğin bir not var mı ?"
                type="text"
              />

              <hr></hr>
            </div>
            <div className="order">
              <div className="buttons">
                <Button color="warning">-</Button>
                <p>1</p>
                <Button color="warning">+</Button>
              </div>
              <div className="finish">
                <h4>Sipariş Toplamı</h4>
                <div className="seçimler">
                  <h4>Seçimler</h4>
                  <h4>50tl</h4>
                </div>
                <div className="toplam">
                  <h4>Toplam</h4>
                  <h4>50tl</h4>
                </div>
                <Button color="warning">SİPARİŞ VER</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default OrderPizza;
