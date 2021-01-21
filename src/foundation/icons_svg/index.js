import React from 'react'

/**
 * =============
 *     Logos
 * =============
 */
import { ReactComponent as GithubFill } from '@svg/icons/logos/github-fill.svg'
import { ReactComponent as GithubLine } from '@svg/icons/logos/github-line.svg'

import { ReactComponent as InstagramFill } from '@svg/icons/logos/instagram-fill.svg'
import { ReactComponent as InstagramLine } from '@svg/icons/logos/instagram-line.svg'

import { ReactComponent as LinkedInFill } from '@svg/icons/logos/linkedin-box-fill.svg'
import { ReactComponent as LinkedInLine } from '@svg/icons/logos/linkedin-box-line.svg'

/**
 * =================
 *     Business
 * =================
 */
import { ReactComponent as ProjectorTwoFill } from '@svg/icons/business/projector-2-fill.svg'
import { ReactComponent as ProjectorTwoLine } from '@svg/icons/business/projector-2-line.svg'

import { ReactComponent as MailSendFill } from '@svg/icons/business/mail-send-fill.svg'
import { ReactComponent as MailSendLine } from '@svg/icons/business/mail-send-line.svg'

/**
 * =================
 *     Buildings
 * =================
 */
import { ReactComponent as HomeSmileTwoFill } from '@svg/icons/buildings/home-smile-2-fill.svg'
import { ReactComponent as HomeSmileTwoLine } from '@svg/icons/buildings/home-smile-2-line.svg'

/**
 * =============
 *     System
 * =============
 */
import { ReactComponent as EyeFill } from '@svg/icons/system/eye-fill.svg'
import { ReactComponent as EyeLine } from '@svg/icons/system/eye-line.svg'

import { ReactComponent as ArrowLeftCircleFill } from '@svg/icons/system/arrow-left-circle-fill.svg'
import { ReactComponent as ArrowLeftCircleLine } from '@svg/icons/system/arrow-left-circle-line.svg'

import { ReactComponent as ArrowRightCircleFill } from '@svg/icons/system/arrow-right-circle-fill.svg'
import { ReactComponent as ArrowRightCircleLine } from '@svg/icons/system/arrow-right-circle-line.svg'

import { ReactComponent as MenuFill } from '@svg/icons/system/menu-fill.svg'
import { ReactComponent as MenuLine } from '@svg/icons/system/menu-line.svg'

import { ReactComponent as CloseCircleFill } from '@svg/icons/system/close-circle-fill.svg'
import { ReactComponent as CloseCircleLine } from '@svg/icons/system/close-circle-line.svg'


/**
 * =============
 *     Media
 * =============
 */
import { ReactComponent as VolumeVibrateFill } from '@svg/icons/media/volume-vibrate-fill.svg'
import { ReactComponent as VolumeVibrateLine } from '@svg/icons/media/volume-vibrate-line.svg'

/**
 * =============
 *     Map
 * =============
 */
import { ReactComponent as MapPinUserFill } from '@svg/icons/map/map-pin-user-fill.svg'
import { ReactComponent as MapPinUserLine } from '@svg/icons/map/map-pin-user-line.svg'

/**
 * =============
 *     Device
 * =============
 */
import { ReactComponent as PhoneFill } from '@svg/icons/device/phone-fill.svg'
import { ReactComponent as PhoneLine } from '@svg/icons/device/phone-line.svg'

/**
 * =================
 *     Document
 * =================
 */
import { ReactComponent as ArticleFill } from '@svg/icons/document/article-fill.svg'
import { ReactComponent as ArticleLine } from '@svg/icons/document/article-line.svg'

import { ReactComponent as FileUserFill } from '@svg/icons/document/file-user-fill.svg'
import { ReactComponent as FileUserLine } from '@svg/icons/document/file-user-line.svg'

/**
 * ===================
 *     Development
 * ===================
 */
import { ReactComponent as GitRepositoryFill } from '@svg/icons/development/git-repository-fill.svg'
import { ReactComponent as GitRepositoryLine } from '@svg/icons/development/git-repository-line.svg'

import { ReactComponent as GitRepositoryPrivateFill } from '@svg/icons/development/git-repository-private-fill.svg'
import { ReactComponent as GitRepositoryPrivateLine } from '@svg/icons/development/git-repository-private-line.svg'

/**
 * ================
 *     Others
 * ================
 */
import { ReactComponent as DoorOpenFill } from '@svg/icons/others/door-open-fill.svg'
import { ReactComponent as DoorOpenLine } from '@svg/icons/others/door-open-line.svg'


// Styles
import styles from './styles.module.scss'

const icons = {
  /**
   * Logos
   */
  'github-fill': GithubFill,
  'github-line': GithubLine,

  'instagram-fill': InstagramFill,
  'instagram-line': InstagramLine,

  'linkedinbox-fill': LinkedInFill,
  'linkedinbox-line': LinkedInLine,

  /**
   * Business
   */
  'projector-2-fill': ProjectorTwoFill,
  'projector-2-line': ProjectorTwoLine,

  'mail-send-fill': MailSendFill,
  'mail-send-line': MailSendLine,

  /**
   * Buildings
   */
  'home-smile-two-fill': HomeSmileTwoFill,
  'home-smile-two-line': HomeSmileTwoLine,
  
  /**
   * System
   */
  'eye-fill': EyeFill,
  'eye-line': EyeLine,

  'arrow-left-circle-fill': ArrowLeftCircleFill,
  'arrow-left-circle-line': ArrowLeftCircleLine,

  'arrow-right-circle-fill': ArrowRightCircleFill,
  'arrow-right-circle-line': ArrowRightCircleLine,

  'menu-fill': MenuFill,
  'menu-line': MenuLine,

  'close-circle-fill': CloseCircleFill,
  'close-circle-line': CloseCircleLine,

  /**
   * Media
   */
  'volume-vibrate-fill': VolumeVibrateFill,
  'volume-vibrate-line': VolumeVibrateLine,

  /**
   * Map
   */
  'map-pin-user-fill': MapPinUserFill,
  'map-pin-user-line': MapPinUserLine,

  /**
   * Device
   */
  'phone-fill': PhoneFill,
  'phone-line': PhoneLine,

  /**
   * Document
   */
  'article-fill': ArticleFill,
  'article-line': ArticleLine,

  'file-user-fill': FileUserFill,
  'file-user-line': FileUserLine,

  /**
   * Development
   */
  'git-repository-fill': GitRepositoryFill,
  'git-repository-line': GitRepositoryLine,

  'git-repository-private-fill': GitRepositoryPrivateFill,
  'git-repository-private-line': GitRepositoryPrivateLine,

  /**
   * Device
   */
  'door-open-fill': DoorOpenFill,
  'door-open-line': DoorOpenLine,
}

/**
 * 
 * @param {{
 *    name: string,
 *    className: string
 * }} props 
 */
const IconSVG = (props) => {
  const {
    name,
    className
  } = props

  const Icon = icons[name]

  let stylesToAdd = [
    styles['icon']
  ]

  if(className) stylesToAdd.push(className)

  const addedStyles = stylesToAdd.join(' ')

  return (
    <Icon
      className={addedStyles}
    />
  )
}

export default IconSVG
