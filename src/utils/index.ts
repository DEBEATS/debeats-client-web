import { AddressZero } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { utils as ethersUtils } from 'ethers'

const { isAddress } = ethersUtils

export const shortenAddress = (address: string, chars = 4) => {
  const parsed = isAddress(address)
  if (!parsed) {
    return ''
    // throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`
}

export const isBrowser = () => typeof window !== 'undefined'

// account is not optional
export const getSigner = (library: any, account: any) => {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export const getProviderOrSigner = (library: any, account: any) => {
  return account ? getSigner(library, account) : library
}

// account is optional
export const getContract = (address: string, ABI: any, library: any, account: any) => {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account))
}
