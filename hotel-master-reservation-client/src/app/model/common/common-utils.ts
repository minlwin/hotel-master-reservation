export class CommonUtils{
    static convertNumberToStarEmoji(rankNumber : number){
        let star = '';
        for(let i = 0 ;i < rankNumber; i++)
        star += 'â­�';
        return star.trim();

    }
}