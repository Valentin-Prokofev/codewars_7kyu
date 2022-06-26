// Write a simple converter for vowels.
//
//                                  Romaji:    a/A e/E i/I u/U o/O
// Hiragana:  あ  え   い  う   お
// Katakana:  ア  エ   イ  ウ   オ
// Expect the above characters as input. There won't be invalid input.
//
// Rules:
//
//     If there is no input return an empty string.
//     Do not change romaji. (a->a, A->A ... NOT A->a )
// Change Kana to lower case romaji. (あ->a ... NOT あ->A)
// Input can be mixed, but output should be consistent. (aAあア -> aAaa, for "romaji")
//     Example 1:
//
// Input: "aeiou"
// Output:"hiragana"
//
// Expected output: "あえいおう"
// Example 2:
//
// Input: "AえイOう"
// Output:"romaji"
//
// Expected output: "AeiOu"

//Solution:

const romajiDictLow = "aeiou";
const romajiDictUp  = "AEIOU";
const hiraDict      = "あえいおう";
const kataDict      = "アエイオウ";

function vowels(input, output){  //"AえイOう", "romaji"
    //todo
    let result = '';
    const romaDi = romajiDictLow + romajiDictUp; //"aeiouAEIOU"
    const allDi = romajiDictLow + romajiDictUp + hiraDict + kataDict; //"aeiouAEIOUあえいおうアエイオウ"
    let i = 0;

    for (const char of input) {  //AえイOう

        i = allDi.indexOf(char) % 5

        if (romaDi.includes(char) && output === 'romaji') {
            result += char;
        } else if (output === 'romaji') {
            result += romajiDictLow[i];
        } else if (output === 'hiragana'){
            result += hiraDict[i];
        } else if (output === 'katakana'){
            result += kataDict[i];
        }

    }

    return result;  //"おうあえい"
}