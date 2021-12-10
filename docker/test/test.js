function test(params) {
  console.log(params)
  setTimeout(() => {
    console.log('didi')
  }, 1000);
}
test('2222')