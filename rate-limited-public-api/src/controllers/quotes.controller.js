import { QuotesService } from "../services/quotes.service.js";

export class QuotesController {
  quotesService = new QuotesService();

  quoteOfTheDay = async () => {
    const quotes = await this.quotesService.getAllQuotes();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  getAllQuotes = async (req, res) => {
    res.status(200).json({
      success: true,
      data: await this.quoteOfTheDay(),
    });
  };
}
