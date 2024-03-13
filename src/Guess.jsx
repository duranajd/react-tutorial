export default function guess({num, guess}){
    if(num > guess){
        return <p>Your guess is too high</p>
    }else if(num < guess){
        return <p>Your guess is too low</p>
    }else{
        return <p>Thats right!</p>
    }
}