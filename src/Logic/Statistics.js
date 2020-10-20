export default (props) => {
 const { discontoInss, discontoIrpf, salarioNumber } = props;

 return {
  baseInss:salarioNumber,
  descontoInss:discontoInss,
  porcentagemInss:String(parseFloat(((discontoInss / salarioNumber) * 100)).toFixed(2)),
  baseIrpf:(salarioNumber - discontoInss),
  descontoIrpf: discontoIrpf,
  porcentagemIrpf: String(parseFloat((discontoIrpf / (salarioNumber - discontoInss))*100).toFixed(2)),
  salarioLiquido:(salarioNumber - discontoIrpf - discontoInss)
 }

}
