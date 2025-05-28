'use client'
import { useState, useEffect, useCallback, useRef, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';

// Type definitions
interface FormData {
  subject: string;
  headerText: string;
  bodyText: string;
  subText: string;
}

interface Stats {
  subscriberCount: string | number;
  lastSent: string;
  emailsSent: string | number;
}

interface Message {
  type: 'success' | 'error' | '';
  content: string;
}

interface CharacterLimits {
  subject: number;
  headerText: number;
  bodyText: number;
  subText: number;
}

type FormField = keyof FormData;
type FormatCommand = 'bold' | 'italic' | 'underline';

const NewsletterCMS: React.FC = () => {
  // 🔐 CONFIGURATION - Change these values directly here
  const ADMIN_PASSWORD = 'young&skilled2025';  // Change this password!
  const BACKEND_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Uses your .env.local

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    subject: '',
    headerText: '',
    bodyText: '',
    subText: ''
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingStats, setIsLoadingStats] = useState<boolean>(true);
  const [message, setMessage] = useState<Message>({ type: '', content: '' });
  const [stats, setStats] = useState<Stats>({
    subscriberCount: '...',
    lastSent: '...',
    emailsSent: '...'
  });

  const bodyTextRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLIFrameElement>(null);

  // Character limits
  const limits: CharacterLimits = {
    subject: 100,
    headerText: 60,
    bodyText: 1000,
    subText: 500
  };

  // Authentication functions
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    await new Promise(resolve => setTimeout(resolve, 800));

    if (loginPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginPassword('');
    } else {
      setLoginError('Invalid password. Please try again.');
      setLoginPassword('');
    }
    
    setIsLoggingIn(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginPassword('');
    setLoginError('');
  };

  // Handle input changes
  const handleInputChange = (field: FormField, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Generate character count info
  const getCharacterInfo = (field: FormField) => {
    const length = formData[field]?.length || 0;
    const limit = limits[field];
    const percentage = length / limit;
    
    let colorClass = 'text-gray-500';
    if (percentage > 0.9) colorClass = 'text-red-600';
    else if (percentage > 0.7) colorClass = 'text-yellow-600';

    return { length, limit, colorClass };
  };

  // Text formatting functions
  const formatText = (command: FormatCommand) => {
    const textarea = bodyTextRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    if (selectedText) {
      let formattedText = selectedText;
      switch(command) {
        case 'bold':
          formattedText = `<strong>${selectedText}</strong>`;
          break;
        case 'italic':
          formattedText = `<em>${selectedText}</em>`;
          break;
        case 'underline':
          formattedText = `<u>${selectedText}</u>`;
          break;
      }
      
      const newValue = textarea.value.substring(0, start) + formattedText + textarea.value.substring(end);
      handleInputChange('bodyText', newValue);
      
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start + formattedText.length);
      }, 0);
    }
  };

  // Generate newsletter HTML template - Updated to match controller fonts
  const generateNewsletterHTML = useCallback((headerText: string, bodyText: string, subText: string) => {
    const processedBodyText = bodyText.replace(/\n/g, '<br>');
    const processedSubText = subText.replace(/\n/g, '<br>');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter Preview</title>
    <style>
        @font-face {
            font-family: 'Cocon';
            src: url('https://res.cloudinary.com/dwjnkuvqv/raw/upload/v1748245946/CoconRegularFont_jevejx.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        @font-face {
            font-family: 'Manrope';
            src: url('https://res.cloudinary.com/dwjnkuvqv/raw/upload/v1748245947/Manrope-Regular_mjyrxx.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f5f5f5;
            line-height: 1.6;
            padding: 20px;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #2d5f4f 0%, #4a8c6f 100%);
            background-image: url('https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748243700/email-bg_qkmzzs.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            color: white;
        }
        
        .header h1 {
            font-family: 'Cocon', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 28px;
            font-weight: normal;
            margin: 0;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .star-top {
            position: absolute;
            top: 20px;
            right: 30px;
            width: 40px;
            height: 40px;
            background-image: url('https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748243700/star2_gx3m3s.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        
        .content {
            padding: 40px 30px;
            background-color: white;
            position: relative;
        }
        
        .main-content {
            color: #333;
            font-size: 16px;
            margin-bottom: 25px;
            line-height: 1.6;
        }
        
        .sub-text {
            color: #666;
            font-size: 14px;
            margin-bottom: 25px;
            line-height: 1.6;
        }
        
        .closing {
            color: #666;
            margin: 25px 0 10px 0;
            font-size: 14px;
        }
        
        .signature {
            color: #666;
            margin-bottom: 30px;
            font-size: 14px;
        }
        
        .logo {
            margin: 30px 0;
            text-align: center;
        }
        
        .logo img {
            height: 40px;
        }
        
        .social-icons {
            display: flex;
            gap: 15px;
            margin: 30px 0;
            justify-content: center;
        }
        
        .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            overflow: hidden;
        }
        
        .social-icon img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .unsubscribe {
            color: #999;
            font-size: 12px;
            margin: 20px 0 10px 0;
            text-align: center;
        }
        
        .unsubscribe a {
            color: #ffa500;
            text-decoration: none;
        }
        
        .copyright {
            color: #999;
            font-size: 12px;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .star-bottom {
            position: absolute;
            bottom: 30px;
            right: 30px;
            width: 30px;
            height: 30px;
            background-image: url('https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748243700/star2_gx3m3s.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        
        .footer {
            position: relative;
            padding-bottom: 60px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="star-top"></div>
            <h1>${headerText}</h1>
        </div>
        
        <div class="content">
            <div class="main-content">${processedBodyText}</div>
            ${processedSubText ? `<div class="sub-text">${processedSubText}</div>` : ''}
            
            <p class="closing">Keep growing and stay skilled!</p>
            <p class="signature">Best regards,<br>The Young and Skilled Initiative Team</p>
            
            <div class="logo">
                <img src="https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748244988/logo_bydem0.png" alt="Young & Skilled Logo">
            </div>
            
            <div class="social-icons">
                <a href="#" class="social-icon">
                    <img src="https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748244987/Facebook_hckslw.png" alt="Facebook">
                </a>
                <a href="#" class="social-icon">
                    <img src="https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748244988/Linkedin_fbhbqj.png" alt="LinkedIn">
                </a>
                <a href="#" class="social-icon">
                    <img src="https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748244988/Instagram_jj5rv6.png" alt="Instagram">
                </a>
            </div>
            
            <div class="footer">
                <p class="unsubscribe">Don't want to receive these emails anymore? <a href="#">Unsubscribe here</a></p>
                <p class="copyright">Copyright © ${new Date().getFullYear()} Young & Skilled Initiative</p>
                <div class="star-bottom"></div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
  }, []);

  // Update preview
  const updatePreview = useCallback(() => {
    const html = generateNewsletterHTML(formData.headerText, formData.bodyText, formData.subText);
    if (previewRef.current) {
      previewRef.current.srcdoc = html;
    }
  }, [formData, generateNewsletterHTML]);

  // Send newsletter
  const sendNewsletter = async () => {
    const { subject, headerText, bodyText, subText } = formData;

    if (!subject.trim() || !headerText.trim() || !bodyText.trim()) {
      showMessage('error', 'Please fill in all required fields (Subject, Header Text, and Body Text)');
      return;
    }

    setIsLoading(true);

    try {
      // Verify backend URL is available
      if (!BACKEND_URL) {
        throw new Error('Backend URL not configured. Please check your .env.local file.');
      }

      const response = await fetch(`${BACKEND_URL}/api/newsletter/send-newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject,
          headerText,
          bodyText,
          subText
        })
      });

      const data = await response.json();

      if (response.ok) {
        showMessage('success', `Newsletter sent successfully to ${data.subscriberCount || 'all'} subscribers!`);
        updateStats(data.subscriberCount);
      } else {
        showMessage('error', data.message || 'Failed to send newsletter');
      }
    } catch (error) {
      showMessage('error', 'Network error. Please check your connection and try again.');
      console.error('Error:', error);
    }

    setIsLoading(false);
  };

  // Show message
  const showMessage = (type: 'success' | 'error', content: string) => {
    setMessage({ type, content });
    setTimeout(() => {
      setMessage({ type: '', content: '' });
    }, 5000);
  };

  // Update stats
  const updateStats = (subscriberCount?: number) => {
    setStats(prevStats => ({
      subscriberCount: subscriberCount || prevStats.subscriberCount,
      lastSent: 'Just now',
      emailsSent: typeof prevStats.emailsSent === 'number' 
        ? prevStats.emailsSent + (subscriberCount || 0)
        : subscriberCount || 0
    }));
  };

  // Load initial stats
  const loadStats = async () => {
    setIsLoadingStats(true);
    try {
      // Try to fetch real stats from backend
      if (BACKEND_URL) {
        const response = await fetch(`${BACKEND_URL}/api/newsletter/stats`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setStats({
            subscriberCount: data.subscriberCount || 0,
            lastSent: data.lastSent || 'Never',
            emailsSent: data.emailsSentToday || 0
          });
        } else {
          // Fallback to placeholder data if backend doesn't have stats endpoint
          setStats({
            subscriberCount: 0,
            lastSent: 'Never',
            emailsSent: 0
          });
        }
      } else {
        // No backend URL configured
        setStats({
          subscriberCount: 0,
          lastSent: 'Never',
          emailsSent: 0
        });
      }
    } catch (error) {
      console.error('Error loading stats:', error);
      // Fallback to zero stats on error
      setStats({
        subscriberCount: 0,
        lastSent: 'Never',
        emailsSent: 0
      });
    } finally {
      setIsLoadingStats(false);
    }
  };

  // Effects
  useEffect(() => {
    // Don't auto-load stats on mount, let user click refresh button
  }, []);

  useEffect(() => {
    const timer = setTimeout(updatePreview, 300);
    return () => clearTimeout(timer);
  }, [formData, updatePreview]);

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Admin Login - Newsletter CMS</title>
          <meta name="description" content="Admin login for Newsletter CMS" />
        </Head>

        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-green-100 p-8 w-full max-w-md">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-700 to-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Access</h1>
              <p className="text-gray-600">Enter password to access Newsletter CMS</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setLoginPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                  placeholder="Enter admin password"
                  required
                  disabled={isLoggingIn}
                />
              </div>

              {loginError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoggingIn || !loginPassword.trim()}
                className="w-full bg-gradient-to-r from-green-700 to-green-600 text-white py-3 px-4 rounded-lg hover:from-green-800 hover:to-green-700 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-medium flex items-center justify-center gap-2"
              >
                {isLoggingIn ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    🔓 Access CMS
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">
                Young & Skilled Initiative - Newsletter Management System
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Newsletter CMS - Young & Skilled Initiative</title>
        <meta name="description" content="Create and manage your Young & Skilled Initiative newsletters" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12 relative">
            <h1 className="lg:text-4xl text-2xl font-bold text-green-800 mb-4">
              📧News-letter
            </h1>
            <p className="text-xl text-gray-600">
              Create and manage your Young & Skilled Initiative newsletters
            </p>
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="absolute top-0 right-0 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
            {/* Editor Panel */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                ✏️ Content Editor
              </h2>

              <div className="space-y-6">
                {/* Subject Line */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Subject Line
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('subject', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                    placeholder="Enter your email subject line..."
                  />
                  <div className={`text-xs mt-1 text-right ${getCharacterInfo('subject').colorClass}`}>
                    {getCharacterInfo('subject').length}/{getCharacterInfo('subject').limit} characters
                  </div>
                </div>

                {/* Header Text */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Header Text
                  </label>
                  <input
                    type="text"
                    value={formData.headerText}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('headerText', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                    placeholder="Enter the main header for your newsletter..."
                  />
                  <div className={`text-xs mt-1 text-right ${getCharacterInfo('headerText').colorClass}`}>
                    {getCharacterInfo('headerText').length}/{getCharacterInfo('headerText').limit} characters
                  </div>
                </div>

                {/* Body Text */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Main Body Text
                  </label>
                  
                  {/* Rich Text Toolbar */}
                  <div className="flex gap-2 mb-2 p-2 bg-gray-50 rounded-lg border">
                    <button
                      type="button"
                      onClick={() => formatText('bold')}
                      className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100 transition-colors text-sm font-bold"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => formatText('italic')}
                      className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100 transition-colors text-sm italic"
                    >
                      I
                    </button>
                    <button
                      type="button"
                      onClick={() => formatText('underline')}
                      className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100 transition-colors text-sm underline"
                    >
                      U
                    </button>
                  </div>

                  <textarea
                    ref={bodyTextRef}
                    value={formData.bodyText}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange('bodyText', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all outline-none resize-none"
                    rows={8}
                    placeholder="Write your main newsletter content here...

Hello [Subscriber Name],

We hope this newsletter finds you thriving and growing in your professional journey. This week, we've curated some exciting insights and opportunities just for you.

[Add your content here...]"
                  />
                  <div className={`text-xs mt-1 text-right ${getCharacterInfo('bodyText').colorClass}`}>
                    {getCharacterInfo('bodyText').length}/{getCharacterInfo('bodyText').limit} characters
                  </div>
                </div>

                {/* Sub Text */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Text (Optional)
                  </label>
                  <textarea
                    value={formData.subText}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange('subText', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all outline-none resize-none"
                    rows={4}
                    placeholder="Add any additional information, calls to action, or announcements...

Examples:
- Follow us on social media for daily tips
- Join our community for exclusive resources
- Don't miss our upcoming events"
                  />
                  <div className={`text-xs mt-1 text-right ${getCharacterInfo('subText').colorClass}`}>
                    {getCharacterInfo('subText').length}/{getCharacterInfo('subText').limit} characters
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={updatePreview}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    👀 Preview Newsletter
                  </button>
                  <button
                    type="button"
                    onClick={sendNewsletter}
                    disabled={isLoading}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg hover:from-green-800 hover:to-green-700 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        📧 Send to All Subscribers
                      </>
                    )}
                  </button>
                </div>

                {/* Messages */}
                {message.content && (
                  <div className={`p-4 rounded-lg ${
                    message.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {message.content}
                  </div>
                )}
              </div>
            </div>

            {/* Preview Panel */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sticky top-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                👁️ Live Preview
              </h2>
              
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                <iframe
                  ref={previewRef}
                  className="w-full h-[600px] border-none"
                  srcDoc="<div style='padding: 2rem; text-align: center; color: #64748b; font-family: system-ui;'>📝 Start typing to see your newsletter preview...</div>"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12">
            {/* Stats Header with Refresh Button */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-green-800">📊 Newsletter Statistics</h2>
                <p className="text-sm text-gray-600 mt-1">Click refresh to get the latest data from your backend</p>
              </div>
              <button
                onClick={loadStats}
                disabled={isLoadingStats}
                className="px-4 py-2 bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg hover:from-green-800 hover:to-green-700 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-medium flex items-center gap-2 text-sm"
              >
                {isLoadingStats ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Loading...
                  </>
                ) : (
                  <>
                    🔄 Refresh Stats
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  stats.subscriberCount === 'Click Refresh' 
                    ? 'text-gray-400 text-sm' 
                    : 'text-green-700'
                }`}>
                  {isLoadingStats ? (
                    <div className="animate-pulse bg-gray-200 h-8 w-16 mx-auto rounded"></div>
                  ) : (
                    stats.subscriberCount
                  )}
                </div>
                <div className="text-gray-600 text-sm">Total Subscribers</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  stats.lastSent === 'Click Refresh' 
                    ? 'text-gray-400 text-sm' 
                    : 'text-green-700'
                }`}>
                  {isLoadingStats ? (
                    <div className="animate-pulse bg-gray-200 h-8 w-20 mx-auto rounded"></div>
                  ) : (
                    stats.lastSent
                  )}
                </div>
                <div className="text-gray-600 text-sm">Last Newsletter Sent</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  stats.emailsSent === 'Click Refresh' 
                    ? 'text-gray-400 text-sm' 
                    : 'text-green-700'
                }`}>
                  {isLoadingStats ? (
                    <div className="animate-pulse bg-gray-200 h-8 w-12 mx-auto rounded"></div>
                  ) : (
                    stats.emailsSent
                  )}
                </div>
                <div className="text-gray-600 text-sm">Emails Sent Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterCMS;