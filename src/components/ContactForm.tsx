'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  privacy?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = '件名を入力してください';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'メッセージを入力してください';
    }

    if (!formData.privacy) {
      newErrors.privacy = 'プライバシーポリシーに同意してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // 実際のAPIエンドポイントに置き換えるか、サードパーティのフォーム送信サービスを利用
      // ここではフォーム送信の成功をシミュレートしています
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 成功時の処理
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        privacy: false,
      });
    } catch {
      // エラー時の処理
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {submitStatus === 'success' ? (
        <div className="text-center py-8">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-2xl font-bold mb-2">送信完了</h3>
          <p className="text-gray-600 mb-6">
            お問い合わせありがとうございます。内容を確認次第、担当者よりご連絡いたします。
          </p>
          <button
            className="btn-primary"
            onClick={() => setSubmitStatus('idle')}
          >
            新しいお問い合わせ
          </button>
        </div>
      ) : submitStatus === 'error' ? (
        <div className="text-center py-8">
          <svg
            className="w-16 h-16 text-red-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-2xl font-bold mb-2">送信エラー</h3>
          <p className="text-gray-600 mb-6">
            申し訳ありません。送信中にエラーが発生しました。時間をおいて再度お試しいただくか、直接メールでお問い合わせください。
          </p>
          <button
            className="btn-primary"
            onClick={() => setSubmitStatus('idle')}
          >
            再試行
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-text font-medium mb-2" htmlFor="name">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="山田 太郎"
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-text font-medium mb-2" htmlFor="email">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="example@email.com"
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-text font-medium mb-2" htmlFor="subject">
              件名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                errors.subject ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="お問い合わせ内容の件名"
            />
            {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
          </div>

          <div>
            <label className="block text-text font-medium mb-2" htmlFor="message">
              メッセージ <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="お問い合わせ内容を詳しく入力してください"
            />
            {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={formData.privacy}
              onChange={handleCheckboxChange}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/50"
            />
            <label className="ml-2 block text-sm text-gray-600" htmlFor="privacy">
              <span className={errors.privacy ? 'text-red-500' : ''}>
                プライバシーポリシーに同意します。
              </span>{' '}
              <a
                href="/privacy"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                プライバシーポリシーを読む
              </a>
            </label>
          </div>
          {errors.privacy && <p className="mt-1 text-red-500 text-sm">{errors.privacy}</p>}

          <div className="text-center">
            <button
              type="submit"
              className={`btn-primary w-full sm:w-auto ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  送信中...
                </span>
              ) : (
                '送信する'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 