function reverseWords(sentence) 
{
    var words = [];
    var word = '';
    var reversedWords = '';

    // Iterate through each character in the sentence
    for (var i = 0; i < sentence.length; i++) 
    {
        var char = sentence[i];

        // If the character is not a space, append it to the current word
        if (char !== ' ') 
        {
            word += char;
        } 
        else {
            // If it's a space, add the current word to the words array
            words.push(word);
            word = ''; // Reset the current word
        }
    }

    // Add the last word to the words array
    words.push(word);

    // Reverse each word and build the reversed sentence
    for (var j = 0; j < words.length; j++) 
    {
        var reversedWord = '';
        word = words[j];

        // Reverse the word character by character
        for (var k = word.length - 1; k >= 0; k--)
        {
            reversedWord += word[k];
        }

        reversedWords += reversedWord + ' ';
    }

    // Trim the trailing space
    reversedWords = reversedWords.trim();

    return reversedWords;
}

var inputSentence = "This is a sunny day";
var reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);



// A. Reverse words in a sentence: