//import { getZkbody } from './zk/zkApp';

let account

const initializeMina = async () => {

    const onboardAuroButton = document.getElementById('connectAuroButton')

    onboardAuroButton.onclick = async () => {
        alert("button clicked")
        if (!window.mina) {
            alert("No Auro Wallet was found!")
        } else {
            onboardAuroButton.innerText = 'Onboarding in progress'
            let data = await window.mina.requestAccounts().catch(err => err)
            if (data.message) {
                onboardAuroButton.innerText = data.message
            } else {
                let approveAccount = data
                account = approveAccount
                document.getElementById('accounts').innerHTML = approveAccount;
                onboardAuroButton.innerText = 'Connected'
                onboardAuroButton.disabled = true
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', initializeMina)