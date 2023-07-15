export function shortenNumber(num: number): string {
    const units = ['k', 'M', 'B', 'T'];

    for(let i = units.length - 1; i >= 0; i--){
        const decimal = Math.pow(1000, i + 1);

        if(num <= -decimal || num >= decimal){
            return +(num / decimal).toFixed(2) + units[i];
        }
    }

    return num.toString();
}