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
mobilsaya.nama="ganti";
mobilsaya.info();

//==GETTER SETTER
console.log("///////////////////");
class Car1{
  constructor(nama="Mobil",warna="Transparan"){
    this.nama = nama;
    this._warna = warna;
  }
  set warna(value){
    console.log(`warna mobilnya dirubah`);
    this._warna=value;
  }
  get warna(){
    return `Warnanya ${this._warna}`;
  }
  info(){
    return this.nama;
    // console.log(this._warna);
  }
}

const mobil1 = new Car1;
console.log(mobil1.warna);
mobil1.warna="Merah";
console.log(mobil1.warna);