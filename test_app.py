# -*- coding: utf-8 -*-
import unittest
from app import app

class FlaskTestCase(unittest.TestCase):
    def setUp(self):
        # 各テスト実行前にクライアントを初期化
        self.app = app.test_client()
        self.app.testing = True

    def test_index_page(self):
        # 1. ページにアクセス
        response = self.app.get('/')
        
        # HTMLの中身を文字列として取得
        html = response.data.decode('utf-8')

        # 2. ステータスコードの確認
        self.assertEqual(response.status_code, 200)

        # 3. <title> の内容をチェック
        self.assertIn('<title>Demo WEB Page</title>', html)

if __name__ == '__main__':
    unittest.main()