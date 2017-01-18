import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'


chai.use(chaiEnzyme())
chai.use(sinonChai)


global.expect = expect
global.shallow = shallow
global.sinon = sinon
global.React = React
