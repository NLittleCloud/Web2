const choice = prompt('Выберите номер задачи 1-7', '');

switch(+choice){
    case 1:
        let speed1 = prompt('Введите скорость в км/ч', '');
        let speed2 = prompt('Введите скорость в м/с', '');
        console.log('Выбрана задача 1');
        console.log(`${+speed1} км/ч соответствует ${+speed1 * 3.6 } м/с`);
        console.log(`${+speed2} м/с соответствует ${+speed2 / 3.6 } км/ч`);
        break;

    case 2:
        let c1 = 5,
            c2 = 12,
            c3 = 13;

        let 
        condition1 = (c1+c2) > c3,
        condition2 = (c2 + c3) > c1,
        condition3 = (c3 + c1) > c2;

        console.log('Выбрана задача 2');
        
        if(condition1 && condition2 && condition3)
        {
            let plp = (c1+c2+c3)/2;
            let s = Math.sqrt(plp*(plp-c1)*(plp-c2)*(plp-c3));

            console.log('Треугольник существует');
            console.log(`Периметр = ${plp*2} \nПлощадь = ${s} \nСоотношение = ${plp*2/s}`);
            
        }else {
            console.log('Треугольника не существует');
        }
        break;

    case 3:
        const num1 = prompt('Введите число', '');
        console.log('Выбрана задача 3');

        if (!isNaN(num1)){
            for (i = 0; i <= +num1; i++)
            {
                if(i % 5 === 0 && i !== 0)
                {
                    console.log(`"${i} fizz buzz"`);
                } else if (i % 2 === 0){
                    console.log(`"${i} buzz"`);
                } else console.log(`"${i} fizz`);
            }
        }
        break;

    case 4:
        let str = '\n';

        for(i = 1; i <= 12; i++)
        {
            if(i % 2 != 0)
            {
                str += '*'.repeat(i) + '\n';
            }else {
                str += '#'.repeat(i) + '\n';
            }
        }
        str += '||';
        console.log('Выбрана задача 4');
        console.log(str);
        break;

    case 5:

        let num = 76;
        let numg = '0';
        console.log('Выбрана задача 5');

        while(+numg !== num)
        {
            numg = prompt('Попробуйте отгадать число');
            if(!isNaN(numg))
            {
                if(+numg > num) console.log('Ваще число больше');
                if(+numg < num) console.log('Ваше число меньше');
            }else{
                console.log('Вы ввели не число, попробуйте в следующий раз');
                break;
            }
        }

        if(+numg === num){
            console.log('Угадано');
        }
        break;

    case 6:
        
        console.log('Выбрана задача 6');
        
        let n = prompt('Введите число n', '');
        let x = prompt('Введите число x', '');
        let y = prompt('Введите число y', '');

        if(x>0 && y > 0 && n > 0){

            if((+n%+x === 0) && (+n%+y === 0) && x>0 && y > 0 && n > 0){
                console.log(`n = ${n}, x = ${x}, y = ${y} => true`);
    
            } else console.log(`n = ${n}, x = ${x}, y = ${y} => false`);
        }

        break;

    case 7:
        console.log('Выбрана задача 7');

        let m = prompt('Введите номер месяца', '');

        if(+m<=12){

            switch (+m){
                case 1:
                case 2:
                case 3:
                    console.log(`месяц ${m} => 1 квартал`);
                    break;
    
                case 4:
                case 5:
                case 6:
                    console.log(`месяц ${m} => 2 квартал`);
                    break;
    
                case 7:
                case 8:
                case 9:
                    console.log(`месяц ${m} => 3 квартал`);
                    break;
    
                case 10:
                case 11:
                case 12:
                    console.log(`месяц ${m} => 4 квартал`);
                    break;
            }
        } else console.log('Неправильно введены данные');

        break;
}