import React, { useState, useEffect } from 'react';
import { defaultServices } from '../data/defaultServices';
import { services as categories } from '../data/content';

export interface ServiceItem {
  id: string;
  categoryId?: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  rating: number;
  isTrendy?: boolean;
  isSeasonal?: boolean;
  slug: string;
}

export default function AdminServices() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ServiceItem>>({});

  // Auth states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error' | 'info'} | null>(null);

  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  useEffect(() => {
    // Check if password exists in local storage, if not, set default
    if (!localStorage.getItem('admin_password')) {
      localStorage.setItem('admin_password', 'admin123');
    }
    
    // Check if already authenticated in session
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setIsAuthenticated(true);
      loadServices();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const currentPassword = localStorage.getItem('admin_password');
    if (passwordInput === currentPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      setPasswordInput('');
      loadServices();
      showNotification('Successfully logged in!', 'success');
    } else {
      showNotification('Incorrect password!', 'error');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
    showNotification('Successfully logged out.', 'info');
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      showNotification('Passwords do not match!', 'error');
      return;
    }
    if (newPassword.length < 4) {
      showNotification('Password must be at least 4 characters long.', 'error');
      return;
    }
    localStorage.setItem('admin_password', newPassword);
    showNotification('Password changed successfully!', 'success');
    setShowPasswordChange(false);
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleForgotPassword = () => {
    showNotification("To reset: Open DevTools (F12) -> Application -> Local Storage -> Delete 'admin_password'. Default will be 'admin123'.", 'info');
  };

  const loadServices = () => {
    // Local fallback only
    const stored = localStorage.getItem('local_services');
    if (stored) {
      let parsed = JSON.parse(stored);
      parsed = parsed.map((item: any) => {
        if (!item.categoryId) {
           const def = defaultServices.find(d => d.id === item.id);
           if (def) item.categoryId = def.categoryId;
        }
        return item;
      });
      setServices(parsed);
    } else {
      setServices(defaultServices);
    }
    setLoading(false);
  };

  const handleSave = () => {
    if (!formData.title) return;
    
    let updatedService: ServiceItem;
    if (editingId && editingId !== 'new') {
      updatedService = { ...services.find(s => s.id === editingId), ...formData } as ServiceItem;
    } else {
      updatedService = { 
        ...formData, 
        id: formData.id || Date.now().toString(),
        slug: formData.slug || formData.title.toLowerCase().replace(/ /g, '-'),
        rating: formData.rating || 4.5
      } as ServiceItem;
    }

    // Local fallback
    const newList = editingId && editingId !== 'new' 
      ? services.map(s => s.id === editingId ? updatedService : s)
      : [...services, updatedService];
    localStorage.setItem('local_services', JSON.stringify(newList));
    setServices(newList);
    showNotification('Service saved successfully!', 'success');
    
    setEditingId(null);
    setFormData({});
    loadServices();
  };

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    const newList = services.filter(s => s.id !== id);
    localStorage.setItem('local_services', JSON.stringify(newList));
    loadServices();
    showNotification('Service deleted successfully.', 'info');
  };

  if (loading) return <div className="p-8 text-center text-slate-500">Loading admin panel...</div>;

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4 relative">
        {/* Notification Toast */}
        {notification && (
          <div className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-300 translate-y-0 opacity-100 border ${
            notification.type === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 
            notification.type === 'error' ? 'bg-red-50 text-red-800 border-red-200' : 
            'bg-blue-50 text-blue-800 border-blue-200'
          }`}>
            <div className="font-semibold text-sm max-w-xs">{notification.message}</div>
            <button onClick={() => setNotification(null)} className="opacity-50 hover:opacity-100 text-lg font-bold">&times;</button>
          </div>
        )}

        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6 text-center">Admin Access</h2>
          <div className="mb-6 p-3 bg-blue-50 text-blue-800 text-xs rounded-lg text-center">
             Default password is <strong>admin123</strong>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                placeholder="Enter admin password"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
            >
              Login
            </button>
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 relative">
      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-300 translate-y-0 opacity-100 border ${
          notification.type === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 
          notification.type === 'error' ? 'bg-red-50 text-red-800 border-red-200' : 
          'bg-blue-50 text-blue-800 border-blue-200'
        }`}>
          <div className="font-semibold text-sm max-w-xs">{notification.message}</div>
          <button onClick={() => setNotification(null)} className="opacity-50 hover:opacity-100 text-lg font-bold">&times;</button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold text-slate-900">Admin: Manage Services</h2>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowPasswordChange(!showPasswordChange)}
            className="bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            Change Password
          </button>
          <button 
            onClick={handleLogout}
            className="bg-white border border-red-100 text-red-600 px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-red-50 transition-all flex items-center justify-center"
          >
            Logout
          </button>
          <button 
            onClick={() => { setEditingId('new'); setFormData({}); setShowPasswordChange(false); }}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center"
          >
            + Add New Service
          </button>
        </div>
      </div>

      {showPasswordChange && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 mb-8 shadow-sm max-w-md mx-auto sm:mx-0 relative">
          <button onClick={() => setShowPasswordChange(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold">&times;</button>
          <h3 className="font-bold text-xl mb-6 text-slate-900 border-b border-slate-100 pb-4">Change Admin Password</h3>
          <form onSubmit={handleChangePassword} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
                required
              />
            </div>
            <div className="flex gap-3 pt-4">
              <button type="submit" className="flex-1 bg-blue-600 text-white font-bold px-4 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-sm shadow-blue-600/20">Update Password</button>
              <button type="button" onClick={() => setShowPasswordChange(false)} className="flex-1 bg-white border border-slate-200 text-slate-800 font-bold px-4 py-3 rounded-xl hover:bg-slate-50 transition-all">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {editingId && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 mb-8 shadow-sm relative">
          <h3 className="font-bold text-xl mb-6 text-slate-900 border-b border-slate-100 pb-4">{editingId === 'new' ? 'Create New Service' : 'Edit Service'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Title <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                value={formData.title || ''} 
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
                placeholder="e.g. AC General Service"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category <span className="text-red-500">*</span></label>
              <select 
                value={formData.categoryId || ''} 
                onChange={e => setFormData({...formData, categoryId: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
              >
                <option value="">-- Select Category --</option>
                {categories.map(c => (
                  <option key={c.id} value={c.slug}>{c.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Price (Rs) <span className="text-red-500">*</span></label>
              <input 
                type="number" 
                value={formData.price || ''} 
                onChange={e => setFormData({...formData, price: Number(e.target.value)})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Discount Price (Optional)</label>
              <input 
                type="number" 
                value={formData.discountPrice || ''} 
                onChange={e => setFormData({...formData, discountPrice: Number(e.target.value)})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
                placeholder="Leave blank if none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Description / Option Details</label>
              <input 
                type="text" 
                value={formData.description || ''} 
                onChange={e => setFormData({...formData, description: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
                placeholder="Brief details or bullet points..."
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  checked={formData.isTrendy || false}
                  onChange={e => setFormData({...formData, isTrendy: e.target.checked})}
                  className="w-5 h-5 border-2 border-slate-300 rounded text-blue-600 focus:ring-blue-600 focus:ring-offset-0 transition-all cursor-pointer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Mark as Trendy</span>
                <span className="text-xs text-slate-500">Shows on the homepage featured section</span>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  checked={formData.isSeasonal || false} 
                  onChange={e => setFormData({...formData, isSeasonal: e.target.checked})}
                  className="w-5 h-5 border-2 border-slate-300 rounded text-blue-600 focus:ring-blue-600 focus:ring-offset-0 transition-all cursor-pointer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800 group-hover:text-amber-600 transition-colors">Mark as Seasonal</span>
                <span className="text-xs text-slate-500">Highlights the service with a seasonal badge</span>
              </div>
            </label>
          </div>
          
          <div className="flex gap-4 border-t border-slate-100 pt-6">
            <button onClick={handleSave} className="bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition-all shadow-sm shadow-green-600/20">
              Save Service Details
            </button>
            <button onClick={() => setEditingId(null)} className="bg-white border border-slate-200 text-slate-700 font-bold px-8 py-3 rounded-xl hover:bg-slate-50 transition-all">
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-xs text-slate-500 uppercase tracking-wider">
                <th className="p-5 font-bold">Service Details</th>
                <th className="p-5 font-bold whitespace-nowrap">Pricing</th>
                <th className="p-5 font-bold text-center">Tags</th>
                <th className="p-5 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map(s => (
                <tr key={s.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="p-5">
                    <div className="font-bold text-slate-900 text-base mb-1">{s.title}</div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                        {categories.find(c => c.slug === s.categoryId)?.title || s.categoryId || 'Uncategorized'}
                      </span>
                    </div>
                    <div className="text-sm text-slate-500 line-clamp-1">{s.description || 'No description provided.'}</div>
                  </td>
                  <td className="p-5 whitespace-nowrap">
                    {s.discountPrice ? (
                      <div className="flex flex-col">
                        <span className="font-extrabold text-lg text-blue-600">Rs. {s.discountPrice}</span>
                        <span className="text-xs font-bold text-slate-400 line-through">Rs. {s.price}</span>
                      </div>
                    ) : (
                      <span className="font-bold text-slate-800 text-base">Rs. {s.price}</span>
                    )}
                  </td>
                  <td className="p-5">
                    <div className="flex gap-2 flex-wrap items-center justify-center">
                      {s.isTrendy ? (
                        <span className="bg-purple-50 text-purple-700 border border-purple-100 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Trendy</span>
                      ) : null}
                      {s.isSeasonal ? (
                        <span className="bg-amber-50 text-amber-700 border border-amber-100 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Seasonal</span>
                      ) : null}
                      {!s.isTrendy && !s.isSeasonal && <span className="text-slate-300 text-xs">-</span>}
                    </div>
                  </td>
                  <td className="p-5 text-right whitespace-nowrap">
                    <button 
                      onClick={() => { setEditingId(s.id); setFormData(s); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="inline-flex items-center justify-center text-blue-600 bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 font-bold text-sm mr-2 transition-colors"
                      title="Edit Service"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(s.id)}
                      className="inline-flex items-center justify-center text-red-600 bg-red-50 px-3 py-2 rounded-lg hover:bg-red-100 hover:text-red-700 font-bold text-sm transition-colors"
                      title="Delete Service"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {services.length === 0 && <div className="p-12 text-center text-slate-500 font-medium">No services found. Add one above!</div>}
        </div>
      </div>
    </div>
  </div>
  );
}
