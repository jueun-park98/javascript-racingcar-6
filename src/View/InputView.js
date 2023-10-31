import { Console } from '@woowacourse/mission-utils';

const INPUT_MESSAGE_CAR_NAMES = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
const INPUT_MESSAGE_ROUND_COUNTS = '시도할 횟수는 몇 회인가요?\n'

const InputView = {
  async readCarNames() {
    const names = await Console.readLineAsync(INPUT_MESSAGE_CAR_NAMES);

    return names;
  },

  async readRoundCounts() {
    const counts = await Console.readLineAsync(INPUT_MESSAGE_ROUND_COUNTS);

    return counts;
  }
}

export default InputView;