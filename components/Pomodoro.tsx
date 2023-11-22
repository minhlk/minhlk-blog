'use client'

import { useEffect, useRef, useState } from 'react'
import Timer from './Timer'
const dingSound = '/static/sound/ding.mp3'

const Pomodoro = () => {
  // const defaultTime = useRef(3)
  const audioRef = useRef<HTMLAudioElement>(null)
  const defaultTime = useRef(60 * 25)
  const [defaultPeriod, setDefaultPeriod] = useState(defaultTime.current)
  const [remainSeconds, setRemainSeconds] = useState(defaultTime.current)
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>()
  const [isPause, setIsPause] = useState(true)

  const increaseFiveMinutes = () => {
    defaultTime.current = defaultTime.current + 300
    resetClock()
  }

  const decreaseFiveMinutes = () => {
    if (defaultTime.current - 300 >= 0) {
      defaultTime.current = defaultTime.current - 300
    }
    resetClock()
  }
  const resetClock = () => {
    setIsPause(true)
    clearInterval(intervalId)
    setDefaultPeriod(defaultTime.current)
    setRemainSeconds(defaultTime.current)
  }
  const startInterval = () => {
    const id = setInterval(() => {
      setRemainSeconds((remainSeconds) => {
        if (remainSeconds <= 0) {
          clearInterval(id)
          setIsPause(true)
          if (audioRef.current) {
            audioRef.current.play()
          }
          return remainSeconds
        }
        return remainSeconds - 1
      })
    }, 1000)
    return id
  }

  useEffect(() => {
    return () => {
      clearInterval(intervalId)
    }
  }, [intervalId])

  return (
    <>
      <Timer
        clock={getClock(remainSeconds)}
        progress={getProgress(remainSeconds, defaultPeriod)}
        isPause={isPause}
        onPause={() => {
          setIsPause(true)
          clearInterval(intervalId)
        }}
        onStart={() => {
          setIsPause(false)
          if (remainSeconds === 0) {
            resetClock()
            return
          }
          setIntervalId(startInterval())
        }}
        onReset={() => {
          resetClock()
        }}
        increaseFiveMinutes={() => {
          increaseFiveMinutes()
        }}
        decreaseFiveMinutes={() => {
          decreaseFiveMinutes()
        }}
      />
      <div>
        <audio ref={audioRef} src={dingSound}>
          <track kind="captions" />
        </audio>
      </div>
    </>
  )
}

function getClock(remainSeconds) {
  const minutes = Math.floor(remainSeconds / 60)
  const seconds = remainSeconds - minutes * 60
  const displayMinutes = minutes < 10 ? '0' + minutes : minutes
  const displaySeconds = seconds < 10 ? '0' + seconds : seconds
  return `${displayMinutes}:${displaySeconds}`
}

function getProgress(remainSeconds, totalSeconds) {
  return (remainSeconds * 100) / totalSeconds
}

export default Pomodoro
