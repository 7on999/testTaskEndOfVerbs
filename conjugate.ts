const conjugateTS = (infinitive:string, pronoun:string) => {

     let secondСonjugation:boolean = false;
     let reflexiveVerb:boolean = false;
 
     const vowelsArr:Array<string> = ['а', 'у', 'о', 'и', 'э', 'ы', 'я', 'ю', 'е','ё']
 
     const exceptionsOfSecondСonjugation:Array<string> = [
     'гнать', 'держать', 'терпеть', 'обидеть', 
     'слышать', 'видеть', 'ненавидеть',  
     'смотреть', 'дышать', 'зависеть', 'вертеть'
 ]
 
     const infinitiveArr:Array<string> = infinitive.toLowerCase().split('');
     const lengthInfinitive:number = infinitiveArr.length;
 
     if (infinitive[lengthInfinitive-3]==='и'&&infinitive!=='брить'&& infinitive!=='стелить'){
           secondСonjugation = true
       }
   
     if (infinitiveArr[lengthInfinitive-1] === 'я') {
           reflexiveVerb = true;
           if (infinitive[lengthInfinitive-5]==='и'){
           secondСonjugation = true
       }
     }
 
     const isOneVowel = (word:string):boolean=>{
      let numberOfVowels:number = 0;
      for (let i=0; i<word.length; i++) {
       if (vowelsArr.includes(word[i])){
        numberOfVowels++;
       }
      }
      if (numberOfVowels===1) {
           return true
      } else {
           return false
      }
 }
 
     if (reflexiveVerb&&!secondСonjugation) {
         switch (pronoun){
             case 'я' :
                  infinitiveArr.splice(lengthInfinitive-4,4, 'юсь');
                  return infinitiveArr.join('')
             case 'мы' :
                 infinitiveArr.splice(lengthInfinitive-4,4, 'eмся');
                 return infinitiveArr.join('')
             case 'ты' :
                  infinitiveArr.splice(lengthInfinitive-4,4, 'eшься');
                 return infinitiveArr.join('')
             case 'вы' :
                  infinitiveArr.splice(lengthInfinitive-4,4, 'eтесь')
                 return infinitiveArr.join('')
             case 'он' :
             case 'она':
                  infinitiveArr.splice(lengthInfinitive-4,4, 'eтся');
                  return infinitiveArr.join('')
             case 'оно':
                   infinitiveArr.splice(lengthInfinitive-4,4, 'eтся')
                   return infinitiveArr.join('')
             case 'они':
                  infinitiveArr.splice(lengthInfinitive-4,4, 'ются')
                  return infinitiveArr.join('')
         }
     } 
 
     if (reflexiveVerb&&secondСonjugation) {
      switch (pronoun){
          case 'я' :
               if (infinitiveArr[lengthInfinitive-6]==='ч'){
                     infinitiveArr.splice(lengthInfinitive-5,5, 'усь');
                     return infinitiveArr.join('')
               }
 
               infinitiveArr.splice(lengthInfinitive-5,5, 'юсь');
               return infinitiveArr.join('')
          case 'мы' :
              infinitiveArr.splice(lengthInfinitive-4,4, 'мся');
              return infinitiveArr.join('')
          case 'ты' :
               infinitiveArr.splice(lengthInfinitive-4,4, 'шься');
              return infinitiveArr.join('')
          case 'вы' :
               infinitiveArr.splice(lengthInfinitive-4,4, 'тесь')
              return infinitiveArr.join('')
          case 'он' :
          case 'она':
               infinitiveArr.splice(lengthInfinitive-4,4, 'тся');
               return infinitiveArr.join('')       
          case 'оно':
                infinitiveArr.splice(lengthInfinitive-4,4, 'тся')
                return infinitiveArr.join('')
          case 'они':
 
                if (infinitiveArr[lengthInfinitive-6]==='ч'){
                     infinitiveArr.splice(lengthInfinitive-5,5, 'атся');
                     return infinitiveArr.join('')
            }
               infinitiveArr.splice(lengthInfinitive-5,5, 'ятся')
               return infinitiveArr.join('')
      }
  } 
     
     if (!(isOneVowel(infinitive))&&secondСonjugation||(exceptionsOfSecondСonjugation.some(word=>word===infinitive)&&infinitive!=='гнать')){
      switch (pronoun){
           case 'я' :
                if (infinitiveArr[lengthInfinitive-4]==='ч'||infinitiveArr[lengthInfinitive-4]==='ж'||
                    infinitiveArr[lengthInfinitive-4]==='ш') {
                     infinitiveArr.splice(lengthInfinitive-3, 3, 'у');
                     return  infinitiveArr.join('')
                } else if (infinitiveArr[lengthInfinitive-4]==='с') {
                     infinitiveArr.splice(lengthInfinitive-4, 4, 'шу');
                     return  infinitiveArr.join('')
                } else if  (infinitiveArr[lengthInfinitive-4]==='д'){
                     infinitiveArr.splice(lengthInfinitive-4, 4, 'жу');
                     return  infinitiveArr.join('')
                } else if  (infinitiveArr[lengthInfinitive-4]==='т'){
                     infinitiveArr.splice(lengthInfinitive-4, 4, 'чу');
                     return  infinitiveArr.join('')
                } else if  (infinitiveArr[lengthInfinitive-4]==='п'){
                     infinitiveArr.splice(lengthInfinitive-3, 3, 'лю');
                     return  infinitiveArr.join('')
                } 
                
                else { 
                     infinitiveArr.splice(lengthInfinitive-3, 3, 'ю');
                     return  infinitiveArr.join('')
                }
 
           case 'мы' :
               infinitiveArr.splice(lengthInfinitive-3, 3, 'им');
               return infinitiveArr.join('')
           case 'ты' :
                infinitiveArr.splice(lengthInfinitive-3, 3, 'ишь');
                return  infinitiveArr.join('')
           
           case 'вы' :
               infinitiveArr.splice(lengthInfinitive-3, 3, 'ите');
               return infinitiveArr.join('')
           
           case 'он':
          case 'она' :
                infinitiveArr.splice(lengthInfinitive-3, 3, 'ит');
                return infinitiveArr.join('')
                   
           case 'они':
 
                if (infinitiveArr[lengthInfinitive-4]==='ч'||infinitiveArr[lengthInfinitive-4]==='ж'||
                infinitiveArr[lengthInfinitive-4]==='ш') {
                     infinitiveArr.splice(lengthInfinitive-3, 3, 'ат');
                     return  infinitiveArr.join('')
                }
                infinitiveArr.splice(lengthInfinitive-3, 3, 'ят');
                return infinitiveArr.join('')     
       }
     }
 
  if (infinitive==='брить'){
       switch (pronoun){
            case 'я': return 'брею'
            case 'мы': return 'бреем'
            case 'ты': return 'бреешь'
            case 'вы': return 'бреете'
            case 'он': return 'бреет'
            case 'она': return 'бреет'
            case 'они': return 'бреют'          
       }
  }
 
  if (infinitive==='стелить'){
      switch (pronoun){
           case 'я': return 'стелю'
           case 'мы': return 'стелем'
           case 'ты': return 'стелешь'
           case 'вы': return 'стелете'
           case 'он': return 'стелет'
           case 'она': return 'стелет'
           case 'они': return 'стелют'          
      }
 }
 
 if (infinitive==='гнать'){
      switch (pronoun){
           case 'я': return 'гоню'
           case 'мы': return 'гоним'
           case 'ты': return 'гонишь'
           case 'вы': return 'гоните'
           case 'он': return 'гонит'
           case 'она': return 'гонит'
           case 'они': return 'гонят'          
      }
 }
 
     switch (pronoun){
         case 'я' :
 
                if(infinitiveArr[lengthInfinitive-1]==='и'&&infinitiveArr[lengthInfinitive-3]==='й'){
                     infinitiveArr.splice(lengthInfinitive-2, 2, 'ду');
                     return  infinitiveArr.join('')} 
 
                 if(infinitiveArr[lengthInfinitive-1]==='и'){
                     infinitiveArr.splice(lengthInfinitive-2, 2, 'у');
                      return  infinitiveArr.join('')} 
 
 
                if((infinitiveArr[lengthInfinitive-5]==='ы'|| infinitiveArr[lengthInfinitive-5]==='и') && infinitiveArr[lengthInfinitive-4]==='в'&&
                infinitiveArr[lengthInfinitive-3]==='а'){
                     infinitiveArr.splice(lengthInfinitive-2, 2, 'ю');
                     return  infinitiveArr.join('')}
                     
                if((infinitiveArr[lengthInfinitive-5]==='о'||infinitiveArr[lengthInfinitive-5]==='е') && infinitiveArr[lengthInfinitive-4]==='в' &&
                infinitiveArr[lengthInfinitive-3]==='а'){
                   
                     infinitiveArr.splice(lengthInfinitive-5, 5, 'ую');
                     return  infinitiveArr.join('')}
 
                if(infinitiveArr[lengthInfinitive-4]==='з'){
                       infinitiveArr.splice(lengthInfinitive-4, 4, 'жу');
                       return  infinitiveArr.join('')} 
 
 
                if(infinitiveArr[lengthInfinitive-4]==='к'){
                       infinitiveArr.splice(lengthInfinitive-4, 4, 'чу');
                       return  infinitiveArr.join('')}
                          
                if((infinitiveArr[1]==='п'&&lengthInfinitive<=5)||(infinitiveArr[lengthInfinitive-4]==='п'&& !isOneVowel(infinitive))){
                       infinitiveArr.splice(lengthInfinitive-3, 3, 'лю');
                       return  infinitiveArr.join('')}
 
                if(infinitiveArr[lengthInfinitive-4]==='р'&& isOneVowel(infinitive)&&lengthInfinitive<=4){
                       infinitiveArr.splice(lengthInfinitive-3, 3, 'ою');
                      return  infinitiveArr.join('')}
 
             
                if((lengthInfinitive<=5&&(infinitiveArr[lengthInfinitive-4]==='р'||infinitiveArr[lengthInfinitive-4]==='д'||infinitiveArr[lengthInfinitive-4]==='г'))
                ||(isOneVowel(infinitive)&&infinitiveArr[lengthInfinitive-5]==='р')||infinitiveArr[lengthInfinitive-4]==='ч'){
                      infinitiveArr.splice(lengthInfinitive-3, 3, 'у');
                     return  infinitiveArr.join('')}
 
                if(isOneVowel(infinitive)&&(infinitiveArr[lengthInfinitive-4]==='ш'||infinitiveArr[lengthInfinitive-4]==='л'
                ||infinitiveArr[lengthInfinitive-4]==='п'||infinitiveArr[lengthInfinitive-4]==='б')){
                      infinitiveArr.splice(lengthInfinitive-3, 3, 'ью');
                      return  infinitiveArr.join('')
                             
                } else {         
                      infinitiveArr.splice(lengthInfinitive-2, 2, 'ю');
                      return  infinitiveArr.join('')
                 }
         
         case 'мы' :
           if((infinitiveArr[lengthInfinitive-5]==='ы'|| infinitiveArr[lengthInfinitive-5]==='и') && infinitiveArr[lengthInfinitive-4]==='в'&&
           infinitiveArr[lengthInfinitive-3]==='а'){
                infinitiveArr.splice(lengthInfinitive-2, 2, 'ем');
                return  infinitiveArr.join('')}
 
           if((infinitiveArr[lengthInfinitive-5]==='о'||infinitiveArr[lengthInfinitive-5]==='е')&&infinitiveArr[lengthInfinitive-4]==='в'&&
           infinitiveArr[lengthInfinitive-3]==='а'){
                infinitiveArr.splice(lengthInfinitive-5, 5, 'уем');
                return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='з'){
                infinitiveArr.splice(lengthInfinitive-4, 4, 'жeм');
                return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='к'){
                  infinitiveArr.splice(lengthInfinitive-4, 4, 'чем');
                  return  infinitiveArr.join('')} 
 
           if(infinitiveArr[1]==='п'&&lengthInfinitive<=5||(infinitiveArr[lengthInfinitive-4]==='п'&& !isOneVowel(infinitive))
           ||(infinitiveArr[lengthInfinitive-4]==='ч')){
                     infinitiveArr.splice(lengthInfinitive-3, 3, 'им');
                     return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='р'&& isOneVowel(infinitive)&&lengthInfinitive<=4){
                      infinitiveArr.splice(lengthInfinitive-3, 3, 'оем');
                       return  infinitiveArr.join('')}
 
           if((lengthInfinitive<=5&&(infinitiveArr[lengthInfinitive-4]==='р'||infinitiveArr[lengthInfinitive-4]==='д')
                     ||isOneVowel(infinitive)&&infinitiveArr[lengthInfinitive-5]==='р')){
                      infinitiveArr.splice(lengthInfinitive-3, 3, 'ём');
                     return  infinitiveArr.join('')}
 
           if(isOneVowel(infinitive)&&(infinitiveArr[lengthInfinitive-4]==='ш'||infinitiveArr[lengthInfinitive-4]==='л'
           ||infinitiveArr[lengthInfinitive-4]==='п'||infinitiveArr[lengthInfinitive-4]==='б')){
                      infinitiveArr.splice(lengthInfinitive-3, 3, 'ьём');
                      return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='г'&& isOneVowel(infinitive)){
                     infinitiveArr.splice(lengthInfinitive-3, 3, 'жём');
                      return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-1]==='и'&&infinitiveArr[lengthInfinitive-2]==='т'&&lengthInfinitive>4){
                      infinitiveArr.splice(lengthInfinitive-2, 2, 'дем');
                      return  infinitiveArr.join('')}
 
           infinitiveArr.splice(lengthInfinitive-2, 2, 'eм');
           return infinitiveArr.join('')
 
 
         case 'ты' :
 
           if((infinitiveArr[lengthInfinitive-5]==='ы'|| infinitiveArr[lengthInfinitive-5]==='и') && infinitiveArr[lengthInfinitive-4]==='в'&&
           infinitiveArr[lengthInfinitive-3]==='а'){
                infinitiveArr.splice(lengthInfinitive-2, 2, 'ешь');
                return  infinitiveArr.join('')}
 
           if((infinitiveArr[lengthInfinitive-5]==='о'||infinitiveArr[lengthInfinitive-5]==='е')&&infinitiveArr[lengthInfinitive-4]==='в'&&
           infinitiveArr[lengthInfinitive-3]==='а'){
                infinitiveArr.splice(lengthInfinitive-5, 5, 'уешь');
                return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='з'){
                infinitiveArr.splice(lengthInfinitive-4, 4, 'жeшь');
                return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='к'){
                infinitiveArr.splice(lengthInfinitive-4, 4, 'чешь');
                 return  infinitiveArr.join('')} 
 
            if((infinitiveArr[1]==='п'&&lengthInfinitive<=5)||(infinitiveArr[lengthInfinitive-4]==='п'&& !isOneVowel(infinitive))
            ||(infinitiveArr[lengthInfinitive-4]==='ч')){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'ишь');
                 return  infinitiveArr.join('')}
 
            if(infinitiveArr[lengthInfinitive-4]==='р'&& isOneVowel(infinitive)&&lengthInfinitive<=4){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'оешь');
                 return  infinitiveArr.join('')}
 
            if((lengthInfinitive<=5&&(infinitiveArr[lengthInfinitive-4]==='р'||infinitiveArr[lengthInfinitive-4]==='д')
            ||isOneVowel(infinitive)&&infinitiveArr[lengthInfinitive-5]==='р')){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'ёшь');
                 return  infinitiveArr.join('')}
 
            if(isOneVowel(infinitive)&&(infinitiveArr[lengthInfinitive-4]==='ш'||infinitiveArr[lengthInfinitive-4]==='л'
            ||infinitiveArr[lengthInfinitive-4]==='п'||infinitiveArr[lengthInfinitive-4]==='б')){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'ьёшь');
                 return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='г'&& isOneVowel(infinitive)){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'жёшь');
                 return  infinitiveArr.join('')}
 
           
           if(infinitiveArr[lengthInfinitive-1]==='и'&&infinitiveArr[lengthInfinitive-2]==='т'&&lengthInfinitive>4){
                 infinitiveArr.splice(lengthInfinitive-2, 2, 'дешь');
                 return  infinitiveArr.join('')}
 
           infinitiveArr.splice(lengthInfinitive-2, 2, 'eшь');
           return  infinitiveArr.join('')
         
         case 'вы' :
 
           if((infinitiveArr[lengthInfinitive-5]==='ы'|| infinitiveArr[lengthInfinitive-5]==='и') && infinitiveArr[lengthInfinitive-4]==='в'&&
           infinitiveArr[lengthInfinitive-3]==='а'){
                infinitiveArr.splice(lengthInfinitive-2, 2, 'ете');
                return  infinitiveArr.join('')}
 
           if((infinitiveArr[lengthInfinitive-5]==='о'||infinitiveArr[lengthInfinitive-5]==='е')&&infinitiveArr[lengthInfinitive-4]==='в'&&
           infinitiveArr[lengthInfinitive-3]==='а'){
                infinitiveArr.splice(lengthInfinitive-5, 5, 'уете');
                return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='з'){
                infinitiveArr.splice(lengthInfinitive-4, 4, 'жeте');
                return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='к'){
                infinitiveArr.splice(lengthInfinitive-4, 4, 'чете');
                 return  infinitiveArr.join('')} 
 
           if((infinitiveArr[1]==='п'&&lengthInfinitive<=5)||(infinitiveArr[lengthInfinitive-4]==='п'&& !isOneVowel(infinitive))
           ||(infinitiveArr[lengthInfinitive-4]==='ч')){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'ите');
                 return  infinitiveArr.join('')}
 
            if(infinitiveArr[lengthInfinitive-4]==='р'&& isOneVowel(infinitive)&&lengthInfinitive<=4){
                infinitiveArr.splice(lengthInfinitive-3, 3, 'оете');
                 return  infinitiveArr.join('')}
 
            if((lengthInfinitive<=5&&(infinitiveArr[lengthInfinitive-4]==='р'||infinitiveArr[lengthInfinitive-4]==='д')
                 ||isOneVowel(infinitive)&&infinitiveArr[lengthInfinitive-5]==='р')){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'ёте');
                 return  infinitiveArr.join('')}
 
            if(isOneVowel(infinitive)&&(infinitiveArr[lengthInfinitive-4]==='ш'||infinitiveArr[lengthInfinitive-4]==='л'
            ||infinitiveArr[lengthInfinitive-4]==='п'||infinitiveArr[lengthInfinitive-4]==='б')){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'ьёте');
                 return  infinitiveArr.join('')}
 
            if(infinitiveArr[lengthInfinitive-4]==='г'&& isOneVowel(infinitive)){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'жёте');
                return  infinitiveArr.join('')}
 
            if(infinitiveArr[lengthInfinitive-1]==='и'&&infinitiveArr[lengthInfinitive-2]==='т'&&lengthInfinitive>4){
                 infinitiveArr.splice(lengthInfinitive-2, 2, 'дете');
                 return  infinitiveArr.join('')}
           
            infinitiveArr.splice(lengthInfinitive-2, 2, 'eте');
            return infinitiveArr.join('')
         
         case 'он':
         case 'она':
 
           if((infinitiveArr[lengthInfinitive-5]==='ы'|| infinitiveArr[lengthInfinitive-5]==='и') && infinitiveArr[lengthInfinitive-4]==='в'&&
           infinitiveArr[lengthInfinitive-3]==='а'){
                infinitiveArr.splice(lengthInfinitive-2, 2, 'ет');
                return  infinitiveArr.join('')}
 
           if((infinitiveArr[lengthInfinitive-5]==='о'||infinitiveArr[lengthInfinitive-5]==='е')&&infinitiveArr[lengthInfinitive-4]==='в'&&
           infinitiveArr[lengthInfinitive-3]==='а'){
                infinitiveArr.splice(lengthInfinitive-5, 5, 'ует');
                return  infinitiveArr.join('')}
           if(infinitiveArr[lengthInfinitive-4]==='з'){
                infinitiveArr.splice(lengthInfinitive-4, 4, 'жет');
                return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='к'){
                infinitiveArr.splice(lengthInfinitive-4, 4, 'чет');
                  return  infinitiveArr.join('')} 
 
           if((infinitiveArr[1]==='п'&&lengthInfinitive<=5)||(infinitiveArr[lengthInfinitive-4]==='п'&& !isOneVowel(infinitive))
           ||(infinitiveArr[lengthInfinitive-4]==='ч')){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'ит');
                  return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='р'&& isOneVowel(infinitive)&&lengthInfinitive<=4){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'оет');
                 return  infinitiveArr.join('')}
 
            if((lengthInfinitive<=5&&(infinitiveArr[lengthInfinitive-4]==='р'||infinitiveArr[lengthInfinitive-4]==='д')
                  ||isOneVowel(infinitive)&&infinitiveArr[lengthInfinitive-5]==='р')){
                  infinitiveArr.splice(lengthInfinitive-3, 3, 'ёт');
                  return  infinitiveArr.join('')}
 
           if(isOneVowel(infinitive)&&(infinitiveArr[lengthInfinitive-4]==='ш'||infinitiveArr[lengthInfinitive-4]==='л'
           ||infinitiveArr[lengthInfinitive-4]==='п'||infinitiveArr[lengthInfinitive-4]==='б')){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'ьёт');
                 return  infinitiveArr.join('')}
 
            if(infinitiveArr[lengthInfinitive-4]==='г'&& isOneVowel(infinitive)){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'жёт');
                 return  infinitiveArr.join('')}
           
           if(infinitiveArr[lengthInfinitive-1]==='и'&&infinitiveArr[lengthInfinitive-2]==='т'&&lengthInfinitive>4){
                 infinitiveArr.splice(lengthInfinitive-2, 2, 'дет');
                 return  infinitiveArr.join('')}
 
           infinitiveArr.splice(lengthInfinitive-2, 2, 'eт');
           return infinitiveArr.join('')
  
         case 'они':
 
           if((infinitiveArr[lengthInfinitive-5]==='ы'|| infinitiveArr[lengthInfinitive-5]==='и') && infinitiveArr[lengthInfinitive-4]==='в'&&
           infinitiveArr[lengthInfinitive-3]==='а'){
                infinitiveArr.splice(lengthInfinitive-2, 2, 'ют');
                return  infinitiveArr.join('')}
 
           if((infinitiveArr[lengthInfinitive-5]==='о'||infinitiveArr[lengthInfinitive-5]==='е')&&infinitiveArr[lengthInfinitive-4]==='в'&&
           infinitiveArr[lengthInfinitive-3]==='а'){
                infinitiveArr.splice(lengthInfinitive-5, 5, 'уют');
                return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='з'){
                infinitiveArr.splice(lengthInfinitive-4, 4, 'жат');
                return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='к'){
                 infinitiveArr.splice(lengthInfinitive-4, 4, 'чете');
                return  infinitiveArr.join('')} 
 
            if((infinitiveArr[1]==='п'&&lengthInfinitive<=5)||(infinitiveArr[lengthInfinitive-4]==='п'&& !isOneVowel(infinitive))){
                infinitiveArr.splice(lengthInfinitive-3, 3, 'ят');
                 return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='р'&& isOneVowel(infinitive)&&lengthInfinitive<=4){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'оят');
                 return  infinitiveArr.join('')}
 
           if((lengthInfinitive<=5&&(infinitiveArr[lengthInfinitive-4]==='р'||infinitiveArr[lengthInfinitive-4]==='д')
                 ||isOneVowel(infinitive)&&infinitiveArr[lengthInfinitive-5]==='р')){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'ут');
                 return  infinitiveArr.join('')}
 
            if(isOneVowel(infinitive)&&(infinitiveArr[lengthInfinitive-4]==='ш'||infinitiveArr[lengthInfinitive-4]==='л'
            ||infinitiveArr[lengthInfinitive-4]==='п'||infinitiveArr[lengthInfinitive-4]==='б')){
                 infinitiveArr.splice(lengthInfinitive-3, 3, 'ьют');
                 return  infinitiveArr.join('')}
 
            if(infinitiveArr[lengthInfinitive-4]==='г'&& isOneVowel(infinitive)){
                infinitiveArr.splice(lengthInfinitive-3, 3, 'ут');
                return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-4]==='ч'){
                infinitiveArr.splice(lengthInfinitive-3, 3, 'ат');
                return  infinitiveArr.join('')}
 
           if(infinitiveArr[lengthInfinitive-1]==='и'&&infinitiveArr[lengthInfinitive-2]==='т'&&lengthInfinitive>4){
                 infinitiveArr.splice(lengthInfinitive-2, 2, 'дут');
                 return  infinitiveArr.join('')}
 
            if(infinitiveArr[lengthInfinitive-1]==='и'){
                 infinitiveArr.splice(lengthInfinitive-2, 2, 'ут');
                 return  infinitiveArr.join('')}
 
           infinitiveArr.splice(lengthInfinitive-2, 2, 'ют');
           return infinitiveArr.join('')
       }     
     }
 