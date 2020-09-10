//==MARI MEMBUAT KELAS
class Car{
  constructor(nama="Kuda",tipe="Minibus"){
    this.nama=nama;
    this.tipe=tipe;
  }
  info(){
    console.log(`Nama : ${this.nama}`);
    console.log(`Tipe : ${this.tipe}`);
  }
}
const mobilsaya = new Car("Xenia","Sedan");
const mobilorang = new Car("Honda","Bus");
mobilsaya.info();
mobilorang.info();
