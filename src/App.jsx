import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import WaveformData from 'waveform-data';
import styled from 'styled-components';
import {
  defaultTheme,
  ThemeProvider,
  Flex,
  Text,
  Icon,
  Button,
  MenuContainer,
  MenuButton,
  MenuList,
  MenuItem,
} from 'minerva-ui';
import {
  PatternOne,
  PatternTwo,
  PatternThree,
  PatternFour,
  PatternFive,
  PatternSix,
} from './patterns';
import Spinner from './Spinner';
import { calculatePercentage } from './calculateLogic';

const TimerContainer = styled(Flex)`
  position: absolute;
  top: calc(50% - 125px);
  left: calc(50% - 125px);
  width: 250px;
  height: 250px;
  justify-content: center;
  align-items: center;
  z-index: 9;
  border-radius: 80px;
`;

const SpinnerText = styled(Text)`
  position: absolute;
  font-size: 40px;
  color: #fff;
`;

const audioContext = new AudioContext();

const App = () => {
  const [recording, setRecording] = useState(false);
  const [audioTrack, setTrack] = useState({});
  const [timer, setTimer] = useState(3);
  const [percentage, setPercentage] = useState('');
  const [pattern, setPattern] = useState(1);

  const stopRecording = () => {
    setRecording(false);
  };

  const onStop = (recordedBlob) => {
    setTrack(recordedBlob);
    console.log('recordedBlob is: ', recordedBlob);
  };

  const clearCanvas = () => {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    setRecording(false);
    setTrack({});
    setTimer(3);
    setPercentage('');
    // setPattern(1);
  };

  const calculateObject = {
    '1': 'patternOne',
    '2': 'patternTwo',
    '3': 'patternThree',
    '4': 'patternFour',
    '5': 'patternFive',
    '6': 'patternSix',
  };

  const createCanvas = (waveform) => {
    const canvas = document.querySelector('#canvas');

    const scaleY = (amplitude, height) => {
      const range = 256;
      const offset = 128;

      return height - ((amplitude + offset) * height) / range;
    };

    const ctx = canvas.getContext('2d');
    ctx.beginPath();

    const channel = waveform.channel(0);

    const beatObj = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
    };

    let currentIndex = 1;

    // Loop forwards, drawing the upper half of the waveform
    for (let x = 0; x < waveform.length; x++) {
      const val = channel.max_sample(x);
      ctx.lineTo(x + 0.5, scaleY(val, canvas.height) + 0.5);

      if (x > 0) {
        const prev = channel.max_sample(x - 1);
        // console.log('>>', val, beatObj[currentIndex]);
        beatObj[currentIndex] += 1;

        if (prev === 0 && val) {
          // console.log('here', currentIndex);
          currentIndex += 1;
        }
      }
    }

    // Loop backwards, drawing the lower half of the waveform
    for (let x = waveform.length - 1; x >= 0; x--) {
      const val = channel.min_sample(x);
      ctx.lineTo(x + 0.5, scaleY(val, canvas.height) + 0.5);
    }

    console.log('DATA', beatObj);

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    setTimeout(() => {
      calculatePercentage[calculateObject[pattern]](beatObj, setPercentage);
    }, 250);
  };

  const handlePlay = async () => {
    await fetch(audioTrack.blobURL)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const options = {
          audio_context: audioContext,
          array_buffer: buffer,
          scale: 1000,
        };

        return new Promise((resolve, reject) => {
          WaveformData.createFromAudio(options, (err, waveform) => {
            if (err) {
              reject(err);
            } else {
              resolve(waveform);
            }
          });
        });
      })
      .then((waveForm) => {
        createCanvas(waveForm);
      });
  };

  const startRecording = () => {
    let timeleft = 3;
    const downloadTimer = setInterval(() => {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        setTimer(3);
      } else if (timeleft === 1) {
        setTimer(timeleft);
        setTimeout(() => {
          setRecording(true);
        }, 500);
      } else {
        setTimer(timeleft);
      }
      timeleft -= 1;
    }, 1000);
  };

  const patternObject = {
    '1': <PatternOne />,
    '2': <PatternTwo />,
    '3': <PatternThree />,
    '4': <PatternFour />,
    '5': <PatternFive />,
    '6': <PatternSix />,
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <MenuContainer>
          <MenuButton margin="10px">
            Pattern {pattern} <Icon name="chevron-down" ml={2} size="14px" />
          </MenuButton>
          <MenuList>
            <MenuItem onSelect={() => setPattern(1)}>Pattern 1</MenuItem>
            <MenuItem onSelect={() => setPattern(2)}>Pattern 2</MenuItem>
            <MenuItem onSelect={() => setPattern(3)}>Pattern 3</MenuItem>
            <MenuItem onSelect={() => setPattern(4)}>Pattern 4</MenuItem>
            <MenuItem onSelect={() => setPattern(5)}>Pattern 5</MenuItem>
            <MenuItem onSelect={() => setPattern(6)}>Pattern 6</MenuItem>
          </MenuList>
        </MenuContainer>
        <Flex width="100%" justifyContent="center">
          {patternObject[pattern]}
        </Flex>
        <br />
        <br />
        <Flex justifyContent="center">
          <Button onClick={handlePlay}>Analyze recording</Button>
          <Button onClick={clearCanvas}>Clear Canvas</Button>
        </Flex>
        <br />
        <br />

        {timer > 0 && timer !== 3 && (
          <TimerContainer>
            <Spinner />
            <SpinnerText>{timer}</SpinnerText>
          </TimerContainer>
        )}

        <Flex alignItems="center" flexDirection="column">
          <ReactMic
            record={recording}
            className="sound-wave"
            onStop={onStop}
            strokeColor="#000000"
            backgroundColor="grey"
            mimeType="audio/mp3"
          />
          <Flex marginTop="10px">
            <Button marginRight="10px" onClick={startRecording} type="button">
              Start
            </Button>
            <Button onClick={stopRecording} type="button">
              Stop
            </Button>
          </Flex>
        </Flex>
        <br />
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <canvas id="canvas" />
          {percentage && <h2>{`Your score is ${percentage}`}</h2>}
        </Flex>
      </div>
    </ThemeProvider>
  );
};

export default App;
