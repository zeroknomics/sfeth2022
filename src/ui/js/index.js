//import { } from '../zk/main';

import { getAccount } from "snarkyjs/dist/node/lib/mina"

let account

const initializeMina = async () => {

    const onboardAuroButton = document.getElementById('connectAuroButton')

    onboardAuroButton.onclick = async () => {
        if (!window.mina) {
            alert("No Auro Wallet was found!")
        } else {
            onboardAuroButton.innerHTML = "<span style='color:white;'>Onboarding...</span>"
        
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

    const initAccount = async () => {
        if (window.mina) {
            let data = await window.mina.requestAccounts().catch(err => err)
            let approveAccount = data
            if (data.message) {
                getAccountsResults.innerHTML = data.message
            } else {
                account = approveAccount
                onboardAuroButton.innerHTML = "<span style='color:white;'>Connected</span>"
                onboardAuroButton.disabled = true

                getAccountsResults.innerHTML = approveAccount;
            }
        }
    }

    initAccount()
}

window.addEventListener('DOMContentLoaded', initializeMina)