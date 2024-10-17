const zeroToNineteen = [
    "",
    " one",
    " two",
    " three",
    " four",
    " five",
    " six",
    " seven",
    " eight",
    " nine",
    " ten",
    " eleven",
    " twelve",
    " thirteen",
    " fourteen",
    " fifteen",
    " sixteen",
    " seventeen",
    " eighteen",
    " nineteen",
];
const ty = [
    "",
    "",
    " twenty",
    " thirty",
    " forty",
    " fifty",
    " sixty",
    " seventy",
    " eighty",
    " ninety",
];

module.exports = function toReadable(number) {
    if (number == 0) {
        return "zero";
    }
    if (number <= 19) {
        return zeroToNineteen[number].trim();
    }
    if (20 <= number && number < 100) {
        return (
            ty[number.toString()[0]].trim() +
            zeroToNineteen[number.toString()[1]]
        );
    }
    if (number == 100) {
        return "one hundred";
    }
    if (number > 100) {
        const lastTwoDigits = number % 100;
        const readableLastTwoDigits =
            lastTwoDigits == 0 ? "" : toReadable(lastTwoDigits);
        return (
            zeroToNineteen[number.toString()[0]].trim() +
            " hundred" +
            (readableLastTwoDigits ? " " + readableLastTwoDigits : "")
        );
    }
};
