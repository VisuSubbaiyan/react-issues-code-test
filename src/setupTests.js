import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

Date.now = jest.fn(() => 1551911061412); // mock today Date
