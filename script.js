const textareaDom = document.getElementById("textarea")
const currentAccount = document.getElementById("current-account")
const currentCash = document.getElementById("current-cash")
let totalAccount = 0
let totalCash = 0
let line = 0

function handleBalanceChange(){
    totalAccount = parseFloat(currentAccount.value)
    totalCash = parseFloat(currentCash.value)
    line += 1
    textareaDom.value += `${line}, Current account balance: ${totalAccount}, Current cash balance: ${totalCash}\n`
}

const operationDom = document.getElementById("bank-select")
const quantityDom = document.getElementById("bank-quantity")

function handleOperation(){
    if (operationDom.value == "Deposit" && quantityDom.value <= totalCash){
        totalAccount += parseFloat(quantityDom.value)
        totalCash -= parseFloat(quantityDom.value)
        line += 1
        textareaDom.value += `${line}, Deposit: ${quantityDom.value}, Current account balance: ${totalAccount}, Current cash balance: ${totalCash}\n`
    }else if (operationDom.value == "Withdraw" && quantityDom.value <= totalAccount){
        totalAccount -= parseFloat(quantityDom.value)
        totalCash += parseFloat(quantityDom.value)
        line += 1
        textareaDom.value += `${line}, Withdraw: ${quantityDom.value}, Current account balance: ${totalAccount}, Current cash balance: ${totalCash}\n`
    }else{
        line += 1
        textareaDom.value += `${line}, ERROR\n`
    }
}
