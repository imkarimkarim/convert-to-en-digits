import {convertToEnDigits, convertToFaDigits} from "./main"

console.log(convertToEnDigits("۰۱۲۳۴۵۶۷۸۹")) // => 0123456789
console.log(convertToFaDigits("0123456789")) // => ۰۱۲۳۴۵۶۷۸۹

function testConvertToEnDigits() {
    let result = convertToEnDigits("۰۱۲۳۴۵۶۷۸۹")
    if (result !== "0123456789"){
        console.log("testConvertToEnDigits FAILD")
    }
    console.log("testConvertToEnDigits PASSED")
}

function testConvertToFaDigits() {
    let result = convertToEnDigits("0123456789")
    if (result !== "۰۱۲۳۴۵۶۷۸۹"){
        console.log("testConvertToFaDigits FAILD")
    }
    console.log("testConvertToFaDigits PASSED")
}