export const isAdminWallet = (walletAddress?: string | null): boolean => {
  if (!walletAddress) return false;
  
  const adminAddresses = (import.meta.env.VITE_SUPER_ADMINS || '').split(',');
  console.log('Admin addresses:', adminAddresses);
  console.log('Checking wallet:', walletAddress);
  console.log('Is admin?', adminAddresses.includes(walletAddress));
  
  return adminAddresses.includes(walletAddress);
};