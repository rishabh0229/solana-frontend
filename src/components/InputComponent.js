import React, { useEffect, useState } from 'react'
import * as solanaWeb3 from '@solana/web3.js';
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
// console.log("solana check", solanaWeb3);




const InputComponent = () => {
    const [value, setValue] = useState("")
    const [addressToCheck, setAddress] = useState("")
    const [alerttext, setAlertText] = useState("")
    const connectToSolana = () => {
        const connection = new Connection("https://solana-api.projectserum.com", "confirmed");
        connection.getVersion().then((value) => {
            console.log(value)
        })
    }
    const generatePublickey = () => {
        const keypair = Keypair.generate()
        // console.log("keypair", keypair)
        // console.log(keypair.publicKey.toString())
        setValue(keypair.publicKey)
    }
    const fund = () => {
        const validate = /^[A-Za-z0-9]{40,44}$/
        if (validate.test(addressToCheck)) {
            try {
                const address = new PublicKey(addressToCheck)
                // console.log(address)
                const connection = new Connection("https://solana-api.projectserum.com", "confirmed");
                connection.getBalance(address).then((bal) => {
                    // console.log("balance", bal / 10000000000)
                    setValue((bal / 1000000000).toString().split(".")[0])
                })
                setAlertText("")
            } catch (error) {
                console.log("error", error)
                setAlertText("invalid public key")
                setValue("")
            }
        } else {
            return
        }

        // connection.requestAirdrop(address, 9000000000000)
    }
    useEffect(() => {
        // connectToSolana()
        generatePublickey()
        // fund()
    }, []);
    const addressHandler = (e) => {
        setAddress(e.target.value);
    };
    // console.log("value", value)
    // console.log("value", typeof (value))
    return (<>

        <div>
            Enter the address to check your SOL balance
            <div>
                <input style={{ width: "493px" }}
                    name="address"
                    value={addressToCheck}
                    onChange={addressHandler}
                    placeholder="Enter the Contract Address"
                />
                { }

            </div>
            <button
                onClick={() => {
                    fund();
                }}
            >Check Balance</button>
            <div>
                {typeof (value) === "string" ? <div>{value}</div> : null}
                {alerttext ? <div style={{ color: "red" }} >{alerttext}</div> : null}
                {/* <h1>{value}</h1> */}
            </div>

        </div>
    </>)
}

export default InputComponent
