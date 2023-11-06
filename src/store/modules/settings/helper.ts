import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
  temperature: number
  top_p: number
  token: string
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: '你是文心一言，一个由百度训练的大型语言模型。请仔细遵循用户的说明。使用markdown进行响应。',
    temperature: 0.8,
    top_p: 1,
    token: '',
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
