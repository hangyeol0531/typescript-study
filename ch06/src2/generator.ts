export function* generator(){ //! 생성기
    console.log('generator started...')
    let value = 1
    while(value < 4) yield value++
    console.log('generator finished..')
}